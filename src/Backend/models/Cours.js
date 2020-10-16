const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
	nom_cours: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	heure_debut: {
		type: String,
		required: true
	},
	heure_fin: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	contenu: {type: Array}

});

module.exports = mongoose.model('Cours', coursSchema);