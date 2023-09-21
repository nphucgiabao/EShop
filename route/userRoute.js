const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/login', userController.login);
router.get('/account', userController.account);
router.get('/regist', userController.regist);
router.post('/login', userController.postLogin);
router.post('/regist', userController.postRegist);

module.exports = router;