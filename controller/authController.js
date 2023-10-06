const passport = require('../middleware/authMiddleware');

class authController {
    constructor() {

    }

    index(req, res) {
        res.render('login-regist');
    }

    login(req, res, next) {
        passport.authenticate('local-login', (err, user) => {
            if (err)
                return next(err);
            if (!user)
                return res.redirect('/user/authen');
            req.login(user, (err) => {
                if (err)
                    return next(err);
                return res.redirect('/user/my-account');
            });
        })(req, res, next);
    }

    regist(req, res, next) {
         passport.authenticate('local-regist', (err, user) => {
             if (err) return next(err);
             if (!user) return res.redirect('/user/authen');
             //return res.redirect(req.body.reqUrl ?? '/user/my-account');
             req.login(user, (err) => {
                if(err) return next(err);
                return res.redirect(req.body.reqUrl ?? '/user/my-account');
             });
         })(req, res, next);
    }
}

module.exports = new authController();