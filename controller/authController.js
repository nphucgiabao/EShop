const passport = require('../middleware/passportMiddleware');

class authController {
    constructor() {

    }

    index(req, res) {
        res.render('login-regist', {csrfToken: req.csrfToken()});
    }

    login(req, res, next) {
        let cart = req.session.cart;
        passport.authenticate('local-login', (err, user) => {
            if (err)
                return next(err);
            if (!user)
                return res.redirect('/user/authen');
            req.login(user, (err) => {
                if (err)
                    return next(err);
                req.session.cart = cart;
                return res.redirect('/user/my-account');
            });
        })(req, res, next);
    }

    logout(req, res, next) {
        let cart = req.session.cart;
        req.logout((err) => {
            if(err) return next(err);
            req.session.cart = cart;    
            res.redirect('/');
        });
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