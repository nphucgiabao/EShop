const express = require('express');
const cartController = require('../controller/cartController');
const router = express.Router();

router.get('/', cartController.cart);

module.exports = router;