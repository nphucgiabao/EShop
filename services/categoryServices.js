const models = require('../models');

class categoryServices {

    constructor() {

    }

    getAll() {
        let sql = `SELECT id, name, "imagePath", 
                          to_char("createdAt", 'DD/MM/YYYY') as createdAt, 
                          to_char("updatedAt", 'DD/MM/YYYY') as updatedAt 
                   FROM public."Categories"`;
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                sql,
                {type: models.sequelize.QueryTypes.SELECT}
            )
            .then((data) => { resolve(data) })
            .catch((err) => { reject(err) });
        });
    }

    insert (category) {
        console.log(category);
        return new Promise((resolve, reject) => {
            models.Category.create(category)
            .then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                reject({success: false, error: err});
            });
        });
    }

    update(category) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `UPDATE public."Categories" 
                 SET name = '${category.name}', 
                     "imagePath" = '${category.imagePath}',
                     "updatedAt" = NOW()
                 WHERE id = ${category.id}`,
                {type: models.sequelize.QueryTypes.update}
            )
            .then((data) => { resolve({ success: true, obj: data}) })
            .catch((err) => { reject({ success: false, error: err}) });
        });
    }
}

module.exports = new categoryServices();