const models = require('../models');

class orderDetailServices {
    constructor() {

    }

    insertList(orderDetails) {
        return new Promise((resolve, reject) => {
            models.OrderDetails.bulkCreate(orderDetails).then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                console.log(err);
                reject({success: false, error: err});
            });
        });
    }

    getByOrderId(orderId) {
        return models.OrderDetails.findAll({
            include: [{
                model: models.Product
            }],
            where: {orderId}
        });
    }
}

module.exports = new orderDetailServices();