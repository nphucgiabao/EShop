const orderServices = require('../services/orderServices');
//const userServices = require('../services/userServices');
const orderDetailServices = require('../services/orderDetailServices');
const productServices = require('../services/productServices');
const addressServices = require('../services/addressServices');
const {statusOrder} = require('../util/appHelper');

class checkoutController{
    constructor(){

    }

    async index(req, res) {
        let addresses = await addressServices.getByUserId(req.user.id);
        res.locals.addresses = addresses;
        res.render('checkout', req.session.cart.getCart());
    }

    async checkout(req, res) {
        if(req.session.cart.getCart().items.length > 0) {
            let address = '';
            if(!isNaN(req.body.addresses)) {
                let a = await addressServices.getById(parseInt(req.body.addresses));
                address = a.address;
            }else{
                let addressInfo = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    userId: req.user.id,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country,
                    zipCode: req.body.zipCode
               }
               address = req.body.address;
               await addressServices.insert(addressInfo);
            }
            if (req.body.paymentMethod)
                req.session.cart.paymentMethod = req.body.paymentMethod;
            let {quantity, subtotal, total, shipping, discount, couponCode, paymentMethod} = req.session.cart.getCart();
            let info_Order = {
                userId: req.user.id,
                quantity,
                subtotal,
                total,
                shipping,
                discount,
                couponCode,
                paymentMethod,
                shippingAddress: address,
                status: statusOrder.Pending
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
            let promises = req.session.cart.getCart().items.map(async (item) => {
                let product = await productServices.getById(item.product.id);
                let quantity = product.quantity - item.quantity;
                return productServices.updateQuantity(product.id, quantity);
            });
            await Promise.all(promises);
            await orderDetailServices.insertList(orderDetails);
            req.session.cart.clear();
            res.redirect('/');
        }
    }
}

module.exports = new checkoutController();