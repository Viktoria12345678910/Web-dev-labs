const jwt = require('jsonwebtoken');

const SECRET = '';

exports.verifyToken = (req, res, next) => {
	const token = req.headers['authorization'];
	if(!token) return res.status(401).json({message: "No token"});
	try{
	req.user = jwt.verify(token, SECRET);
	next();
	} catch {
	res.status(401).json({message: "invalid token"});
	}
};

exports.adminOnly = (req, res, next) => {
	if (req.user.role !== 'admin') return res.status(403).json({massage: "Admins only"});
}

exports.SECRET = SECRET;

