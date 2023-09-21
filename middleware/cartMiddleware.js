const cartServices = require('../services/cartServices');

let cartMiddleware = (req, res, next) => {
    req.session.cart = new cartServices(req.session.cart ? req.session.cart : {});
    res.locals.quantity = req.session.cart.quantity;
    next();
}

module.exports = cartMiddleware;