const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:P@ssw0rdsio@cluster0.n6mhq.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion � MongoDB r�ussie !'))
    .catch(() => console.log('Connexion � MongoDB �chou�e !'));

app.listen(3000, () => console.log('Gator app listening on port 3000!'));