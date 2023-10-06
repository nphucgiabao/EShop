const crypto = require('crypto');
const userServices = require('../services/userServices');

class userController{
    constructor(){

    }

    loginAndRegist(req, res) {
        res.render('login-regist');
    }

    index(req, res) {
        res.render('my-account');
    }

    async postLogin(req, res) {
        let password = crypto.createHash('md5').update(req.body.password).digest("hex");
        let user = await userServices.login(req.body.email, password);
        res.redirect('/home/index');
    }

    async postRegist(req, res) {
        let user = req.body;
        user.password = crypto.createHash('md5').update(user.password).digest("hex");
        let result = await userServices.insert(user);
        if (result.success)
            res.redirect('/user/login');
        else
            res.redirect('/user/regist');
    }

    account(req, res) {
        res.render('my-account');
    }

}

module.exports = new userController();