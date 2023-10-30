const models = require('../models');

class orderServices {
    constructor() {

    }

    insert(order) {
        return new Promise((resolve, reject) => {
            models.Order.create(order).then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                console.log(err);
                reject({success: false, error: err});
            });
        });
    }

    getByUserId(userId) {
        return models.Order.findAll({
            attributes: ['id', 'quantity', 'total', 'subtotal', 'shipping', 'discount', 'couponCode', 'shippingAddress', 'paymentMethod', 'paymentDetails', 'status', 'userId', 'createdAt', 'updatedAt'],
            where: { userId } 
        });
    }
}

module.exports = new orderServices();