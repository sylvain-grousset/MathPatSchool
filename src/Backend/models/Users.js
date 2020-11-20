const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

login:{
    type: String,
    required: true,
    unique: true,
},

mdp:{
    type: String,
    required: true,
    unique: true,
}
});

module.exports = mongoose.model('Users', UserSchema);