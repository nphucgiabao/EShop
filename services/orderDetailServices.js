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
}

module.exports = new orderDetailServices();