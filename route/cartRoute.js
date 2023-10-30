const express = require('express');
const cartController = require('../controller/cartController');
const csrf = require('csurf');
const router = express.Router();
const bodyParser = require('body-parser');

let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({extended:false});

router.get('/', csrfProtection, cartController.cart);
router.post('/add', cartController.addProduct);
router.post('/update', parseForm, csrfProtection, cartController.updateProduct);
router.post('/delete', parseForm, csrfProtection, cartController.deleteProduct);
router.post('/applyCoupon', parseForm, csrfProtection, cartController.applyCoupon);

module.exports = router;