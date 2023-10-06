const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.get('/authen', authController.index);
router.post('/login', authController.login);
router.post('/regist', authController.regist);

module.exports = router;