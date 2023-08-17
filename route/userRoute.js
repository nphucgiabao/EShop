const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/login', userController.login);
router.get('/account', userController.account);

module.exports = router;