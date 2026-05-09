const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/userSchema');
const {SECRET} = require('../middleware/auth');

exports.register = async (req, res) => {
	const hashed = await bcrypt.hash(req.body.password, 10);
	const user = new User({username: req.body.username, password: hashed, role: req.body.role});
	await user.save();
	res.json({message: "registered"});
};

exports.login = async (req,res) => {
	const user = await User.findOne({username: req.body.username});
	if(!user) return res.status(404).json({message:"User not found"});
	const match = await bcrypt.compare(req.body.password. user.password);
	if(!match) return res.status(401).json({message: "Wrong password"});
	const token = jwt.sign ({id: user._id, role: user.lore }, SECRET);
};
