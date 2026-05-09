"use strict"
const mongoose = require('mongoose');
const connect = async () => {
	await mongoose.connect();
	console.log("connected to mongoDB");
};

module.export = connect;
