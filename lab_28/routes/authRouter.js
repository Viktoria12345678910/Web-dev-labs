const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/refresh-token', controller.refreshToken);
router.post('/logout', auth, controller.logout);
router.get('/user-info', auth, controller.userInfo);
router.get('/admin', auth, authAdmin, controller.adminPage);

module.exports = router;
