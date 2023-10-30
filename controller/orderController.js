const orderDetails = require('../services/orderDetailServices');


class orderController {
    constructor() {

    }

    async getOrderDetails(req, res) {
        res.locals.data = await orderDetails.getByOrderId(parseInt(req.query.orderId));
        return res.render('orderDetailsPopup', {layout: false});
    }
}

module.exports = new orderController();