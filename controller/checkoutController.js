const orderServices = require('../services/orderServices');
const userServices = require('../services/userServices');
const orderDetailServices = require('../services/orderDetailServices');

class checkoutController{
    constructor(){

    }

    index(req, res) {
        res.render('checkout', req.session.cart.getCart());
    }

    async checkout(req, res) {
        if(req.session.cart.getCart().items.length > 0) {
            let infoUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                mobile: req.body.mobile
            }
            let user = await userServices.insert(infoUser);
            let {quantity, subtotal, total, shipping, discount, couponCode, paymentMethod, shippingAddress} = req.session.cart.getCart();
            let info_Order = {
                userId: user.obj.id,
                quantity,
                subtotal,
                total,
                shipping,
                discount,
                couponCode,
                paymentMethod,
                shippingAddress
            }
            let order = await orderServices.insert(info_Order);
            let orderDetails = req.session.cart.getCart().items.map((item) => { 
                return { 
                    quantity: item.quantity,
                    price: item.product.price,
                    total: item.total,
                    orderId: order.obj.id,
                    productId: item.product.id
                } 
            });
            await orderDetailServices.insertList(orderDetails);
            req.session.cart.clear();
            res.redirect('/');
        }
    }
}

module.exports = new checkoutController();