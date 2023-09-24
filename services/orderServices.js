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
}

module.exports = new orderServices();