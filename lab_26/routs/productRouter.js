const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const logger = require('../middleware/logger');
const {verifyToken, adminOnly} = require("../middleware/auth");
router.use(logger);
router.get('/list', controller.getList);
router.post('/create', verifyToken, adminOnly, controller.create);
router.put(':id', verifyToken, adminOnly, controller.update);
router.delete('/:id', verifyToken, adminOnly, controller.remove);

module.exports = router;
