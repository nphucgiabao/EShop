const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const csrf = require('csurf');
const bodyParser = require('body-parser');

let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({extended:false});

router.get('/authen', csrfProtection, authController.index);
router.post('/login', parseForm, csrfProtection, authController.login);
router.post('/regist', parseForm, csrfProtection, authController.regist);

module.exports = router;