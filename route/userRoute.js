const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/my-account', userController.index);
// router.post('/login', userController.postLogin);
// router.post('/regist', userController.postRegist);

module.exports = router;