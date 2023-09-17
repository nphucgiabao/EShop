const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/', productController.productList);
router.get('/detail/:id', productController.productDetail);
router.get('/view', productController.viewAll);
router.get('/addedit', productController.addEdit);
router.post('/addedit', productController.insertUpdate);

module.exports = router;