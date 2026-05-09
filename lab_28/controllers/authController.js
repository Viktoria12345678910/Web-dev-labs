const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const generateTokens = (user)=>{
	const accessToken = jwt.sign(
		{ id: user._id, role: user.role},
		process.env.ACCESS_SECRET,
		{exiresIn: '15m'}
	);

	const refreshToken = jwt.sign(
		{id: user._id, role: user.role},
		process.env.REFRESH_SECRET,
		{expiresIn: "7d"}
	);

	return {accessToken, refreshToken};
}

exports.register = async (req, res) => {
	const existing = await User.findOne({email: req.body.email});
	if (existing) return res.status(400).json({message: "User already exists"});

	const hashed = await bcrypt.hash(req.body.password, 10);
	const user = new User({...req.body, password: hashed});
	await user.save();
	res.json({message: "Registered successfully"});
};

exports.login = async (req,res) => {
	const user = await User.findOne({ email: req.body.email});
	if(!user) return res.status(404).json({message: "User not found"});

	const match = await bcrypt.compare(req.body.password, user.password);
	if (!match) return res.status(401).json({message: 'Wrong password'});

	const { accessToken, refreshToken } = generateTokens(user);
	use.refreshToken = refreshToken;
	await user.save();

	res.json({sccassToken, refreshToken});
}

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'No token' });

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const user = await User.findById(decoded.id);
    if (user.refreshToken !== refreshToken) return res.status(403).json({ message: 'Invalid token' });

    const tokens = generateTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    res.json(tokens);
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};

exports.logout = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.refreshToken = null;
  await user.save();
  res.json({ message: 'Logged out' });
};

exports.userInfo = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password -refreshToken');
  res.json(user);
};

exports.adminPage = (req, res) => {
  res.json({ message: 'Welcome, admin!' });
};
