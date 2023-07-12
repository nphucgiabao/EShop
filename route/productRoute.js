const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/', productController.productList);
router.get('/detail/:id', productController.productDetail);

module.exports = router;