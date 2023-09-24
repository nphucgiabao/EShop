const models = require('../models');

class userServices {

    constructor() {

    }

    insert(user) {
        return new Promise((resolve, reject) => {
            models.User.create(user).then((data) => {
                resolve({success: true, obj: data});
            }).catch((err) => {
                console.log(err);
                reject({success: false, error: err});
            });
        });
    }

    update(user) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `UPDATE "Users" 
                 SET email = '${user.email}', 
                     password = '${user.password}',
                     "firstName" = ${user.firstName},
                     "lastName" = ${user.lastName},
                     "mobile" = '${user.mobile}',
                     "isAdmin" = '${user.isAdmin}',                     
                     "updatedAt" = NOW()
                 WHERE id = ${user.id}`,
                {type: models.sequelize.QueryTypes.update}
            )
            .then((data) => { resolve({ success: true, obj: data}) })
            .catch((err) => { console.log(err); reject({ success: false, error: err}) });
        });
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            models.sequelize.query(
                `SELECT * FROM "Users" WHERE email = '${email}' and password = '${password}'`,
                {type: models.sequelize.QueryTypes.SELECT}
            )
            .then((data) => { resolve(data); })
            .catch((err) => { reject(err) });
        });
    }

}

module.exports = new userServices();