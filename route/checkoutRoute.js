const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkoutController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', checkoutController.index);
router.post('/order', checkoutController.checkout);

module.exports  = router;