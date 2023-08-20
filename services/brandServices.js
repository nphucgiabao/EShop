const models = require('../models');

class BrandService {

    constructor() {
        
    }

    getAll() {
        return new Promise((resolve, reject) => {
            //models.Brand
            //.findAll({
            //    attributes: [
            //        'id', 
            //        'name', 
            //        'imagePath',                    
            //        'createdAt', 
            //        'updatedAt'
            //    ]
            //})
            //.then((data) => { resolve(data) })
            //.catch((err) => { reject(err) });
            models.sequelize.query(
                `SELECT id, "Brands".name, "Brands"."imagePath",
                to_char("Brands"."createdAt", 'DD/MM/YYYY') as createdAt, 
                to_char("Brands"."updatedAt", 'DD/MM/YYYY') as updatedAt 
                FROM public."Brands"
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
                `SELECT * FROM public."Brands" WHERE id = ${id}`,
                {type: models.sequelize.QueryTypes.SELECT}
            )
            .then((data) => { resolve(data); })
            .catch((err) => { reject(err) });
        });
    }

    insert (brand) {
        return new Promise((resolve, reject) => {
            models.Brand.create(brand)
            .then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                reject({success: false, error: err});
            });
        });
    }

    update(brand) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `UPDATE public."Brands" 
                 SET name = '${brand.name}', 
                     "imagePath" = '${brand.imagePath}',
                     "updatedAt" = NOW()
                 WHERE id = ${brand.id}`,
                {type: models.sequelize.QueryTypes.update}
            )
            .then((data) => { resolve({ success: true, obj: data}) })
            .catch((err) => { reject({ success: false, error: err}) });
        });
    }
}

module.exports = new BrandService();