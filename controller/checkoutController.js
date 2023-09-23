class checkoutController{
    constructor(){

    }

    index(req, res) {
        res.render('checkout', req.session.cart.getCart());
    }
}

module.exports = new checkoutController();