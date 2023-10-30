const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const csrf = require('csurf');
const bodyParser = require('body-parser');

let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({extended:false});

router.use(authMiddleware);
router.get('/my-account', csrfProtection, userController.index);
router.get('/edit-address', csrfProtection, userController.editAddress);
router.post('/update-address', parseForm, csrfProtection, userController.updateAddress);
router.post('/update-account', parseForm, csrfProtection, userController.updateAccount);
router.post('/update-password', parseForm, csrfProtection, userController.updatePassword);
//router.post('/login', userController.postLogin);
// router.post('/regist', userController.postRegist);

module.exports = router;