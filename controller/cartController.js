const productServices = require('../services/productServices');

class cartController{
    constructor() {

    }

    cart(req, res) {
        res.render('cart', req.session.cart.getCart());
    }

    async addProduct(req, res) {
        let product = await productServices.getById(req.body.id);
        if (product)
            req.session.cart.add(product.pop(), req.body.quantity);
        console.log(req.session.cart.getCart());
        return res.json({ quantity: req.session.cart.quantity });
    }
}

module.exports = new cartController();