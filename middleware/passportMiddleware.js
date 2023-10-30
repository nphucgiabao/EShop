const passport = require('passport');
const LocalStrategy = require('passport-local');
const {hashMD5} = require('../util/appHelper');
const userServices = require('../services/userServices');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await userServices.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        if (!req.user) {
            let user = await userServices.login(email, hashMD5(password));
            if (user)
                return done(null, user.pop());
        }
        done(null, req.user);
    } catch (error) {
        done(error);
    }
}));

passport.use('local-regist', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    if (req.user) return done(null, req.user);
    try {
        let user = await userServices.findByEmail(email);
        if (user) return done(null, false);
        let newUser = req.body;
        newUser.password = hashMD5(password);
        let result = await userServices.insert(newUser);
        if (result.success) return done(null, result.id);
        done(null, false);
    } catch (error) {
        done(error);
    }
}));

module.exports = passport;