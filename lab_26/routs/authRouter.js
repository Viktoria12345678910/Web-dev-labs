const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/register', controller.register);
router.login('/login', controller.login);

module.exports = router;
