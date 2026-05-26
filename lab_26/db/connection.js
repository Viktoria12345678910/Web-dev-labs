"use strict"
require('dotenv').config();
const mongoose = require('mongoose');
const connect = async () => {
	await mongoose.connect(process.env.MONGO_URI);
	console.log("connected to mongoDB");
};

module.exports = connect;
