const mongoose = require('mongoose');

const parcoursSchema = mongoose.Schema({

	titre: {
		type: String,
		required: true,
		unique: true,

	},
	description: {
		type: String,
		required: true,
		unique: true,

	},
	cours: [{
		type: ObjectId,
	]}


});

module.exports = mongoose.model('Parcours', parcoursSchema);