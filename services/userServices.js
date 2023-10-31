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
        return models.User.update({...user}, {where:{id:user.id}});
        // return new Promise((resolve, reject) => {
        //     models.sequelize.query(
        //         `UPDATE "Users" 
        //          SET email = '${user.email}', 
        //              "firstName" = ${user.firstName},
        //              "lastName" = ${user.lastName},
        //              "mobile" = '${user.mobile}',                   
        //              "updatedAt" = NOW()
        //          WHERE id = ${user.id}`,
        //         {type: models.sequelize.QueryTypes.update}
        //     )
        //     .then((data) => { resolve({ success: true, obj: data}) })
        //     .catch((err) => { console.log(err); reject({ success: false, error: err}) });
        // });
    }

    updatePassword(id, password) {
        return models.User.update({password},{where:{id}});
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

    async findById(id) {
        return await models.User.findOne({
            attributes: ['id', 'email', 'firstName', 'lastName', 'mobile', 'isAdmin'],
            where: { id }
        });
    }

    async findByEmail(email) {
        return await models.User.findOne({where: {email}});
    }
}

module.exports = new userServices();