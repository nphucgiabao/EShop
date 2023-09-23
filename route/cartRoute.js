const express = require('express');
const cartController = require('../controller/cartController');
const router = express.Router();

router.get('/', cartController.cart);
router.post('/add', cartController.addProduct);
router.post('/delete', cartController.deleteProduct);

module.exports = router;