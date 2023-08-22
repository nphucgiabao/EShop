const models = require('../models');

class productServices {

    constructor() {

    }

    getAll() {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `SELECT id, name, "imagePath",
                to_char("createdAt", 'DD/MM/YYYY') as createdAt, 
                to_char("updatedAt", 'DD/MM/YYYY') as updatedAt 
                FROM public."Products"
                ORDER BY id ASC`,
                {type: models.sequelize.QueryTypes.SELECT}
            )
            .then((data) => { resolve(data) })
            .catch((err) => { reject(err) });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `SELECT * FROM public."Products" WHERE id = ${id}`,
                {type: models.sequelize.QueryTypes.SELECT}
            )
            .then((data) => { resolve(data); })
            .catch((err) => { reject(err) });
        });
    }

    insert(product) {
        return new Promise((resolve, reject) => {
            models.Product.create(product)
            .then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                reject({success: false, error: err});
            });
        });
    }

    update(product) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `UPDATE public."Products" 
                 SET name = '${product.name}', 
                     "imagePath" = '${product.imagePath}',
                     "updatedAt" = NOW()
                 WHERE id = ${brand.id}`,
                {type: models.sequelize.QueryTypes.update}
            )
            .then((data) => { resolve({ success: true, obj: data}) })
            .catch((err) => { reject({ success: false, error: err}) });
        });
    }

    delete(id) {

    }
}

module.exports = new productServices();