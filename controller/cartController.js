const productServices = require('../services/productServices');

class cartController{
    constructor() {

    }

    cart(req, res) {
        res.render('cart', { csrfToken: req.csrfToken(), cart: req.session.cart.getCart() });
    }

    async addProduct(req, res) {
        let product = await productServices.getById(req.body.id);
        if (product)
            req.session.cart.add(product, req.body.quantity);
        return res.json({ quantity: req.session.cart.quantity });
    }

    updateProduct(req, res) {
        try{
            let update = JSON.parse(req.body.data);
            for(let id in update) {
                req.session.cart.update(id, parseInt(update[id]));
            }
            return res.json({ success: true, quantity: req.session.cart.quantity });
        } catch{
            return res.json({ success: false });
        }
    }

    deleteProduct(req, res) {
        let result = req.session.cart.remove(req.body.id);
        return res.json({ success: result, quantity: req.session.cart.quantity });
    }

    applyCoupon(req, res) {
        try {
            req.session.cart.couponCode = req.body.coupon;
            return res.json({ success: true });
        } catch {
            return res.json({ success: false });
        }
    }
}

module.exports = new cartController();