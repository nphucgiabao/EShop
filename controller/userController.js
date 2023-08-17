class userController{
    constructor(){

    }

    login(req, res){
        res.render('login');
    }

    account(req, res){
        res.render('my-account');
    }

}

module.exports = new userController();