let isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) return next();
    res.redirect('/user/authen');
}

module.exports = isLoggedIn;