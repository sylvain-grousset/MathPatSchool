const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
var router = express.Router();
var assert = require('assert');

const mongoose = require('mongoose');

const Cours = require('./models/cours');
const cours = require('./models/cours');
const Users = require('./models/Users');
const { db } = require('./models/cours');

var url = 'mongodb://localhost:27017/ppe';

//connection à la bDD mongoDB
mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Connexion MongoDB reussie !'))
    .catch(() => console.log('Connexion MongoDB Echouee !'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function (req, res) {
    res.send('Hello World!');
}); 

app.get('/Login', function(req, res){
  var utilisateur = req.query.utilisateur;
  var mdp = req.query.mdp;
  Users.findOne({login: utilisateur
  })
  .then(result => {if(result.mdp === mdp){
    res.send('MDP CORRECT');
  }else{res.send('MDP INCCORECT')
}});

});

app.get('/Cours/:date', function(req, res) {
  var dateEnter = req.params.date;
  
	Cours.find({
    date: dateEnter
  }) 
  .then(a => res.status(200).json(a.mdp));
 
});



//Ajout d'un cours
app.post('/addCours', function(req,res) {
  const cours = new Cours({
    nom_cours: req.body.nom_cours,
    date: req.body.date,
    heure_debut: req.body.heure_debut,
    heure_fin: req.body.heure_fin,
    description: req.body.description,
    contenu: req.body.contenu,
    
  });
  cours.save()
  .then(val => {res.json({ msg: "Cours Added Successfully", val: val })
  })
})
	
// delete a employee by id
app.delete('/Delete/Cours/:nom_cours', function(req, res) {
	console.log(req.params.nom_cours);
	let nom_cours = req.params.nom_cours;
	Employee.remove({
		nom_cours : nom_cours
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Le cours a été supprimé avec succès');	
	});
});







//get all employee data from db
app.get('/AllCours', function(req, res) {
	// use mongoose to get all todos in the database
	Cours.find(function(err, cours) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
		res.json(cours); // return all employees in JSON format
	});
});



app.listen(3000, () => console.log('Gator app listening on port 3000!'));