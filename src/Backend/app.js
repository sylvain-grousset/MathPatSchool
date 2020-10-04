const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
var router = express.Router();
var assert = require('assert');

const mongoose = require('mongoose');

const Cours = require('./models/cours');

var url = 'mongodb://localhost:27017/test';

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send('Hello World!');
});
   

app.post('/addCours', function(req,res) {
  const cours = new Cours({
    nom_cours: req.body.nom_cours,
    date: req.body.date,
    heure_debut: req.body.heure_debut,
    heure_fin: req.body.heure_fin,
    description: req.body.description,
  });
  cours.save().then(val => {
    res.json({ msg: "Cours Added Successfully", val: val })
  })
})

app.post('/addParcours', function(req, res){
    const parcours = new Parcours({
        titre: req.body.titre,
        description: req.body.description,
        cours: req.body.cours,
    });
    parcours.save().then(val => {
        res.json({msg: "Parcours addedd Successfuly", val: val})
    })
});


app.listen(3000, () => console.log('Gator app listening on port 3000!'));