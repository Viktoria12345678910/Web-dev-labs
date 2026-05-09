const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	role: {type: String, dafault: 'user'},
	refreshToken: String
});

module.exports = monguse.model('User', userSchema);
