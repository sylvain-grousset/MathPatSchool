const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
	nom_cours: {
		type: String,
		required: true,
		unique: true
	},
	date: {
		type: String,
		required: true,
		unique: true
	},
	heure_debut: {
		type: String,
		required: true,
		unique: true
	},
	heure_fin: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true,
		unique: true
	},


});

module.exports = mongoose.model('Cours', coursSchema);