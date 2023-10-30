const models = require('../models');

class addressServices {
    constructor() {

    }

    getById(id) {
        return models.address.findOne({
            attributes: ['id', 'firstName', 'lastName', 'email', 'mobile', 'address', 'country', 'city', 'state', 'zipCode', 'isDefault', 'userId'],
            where: {id}
        });
    }

    getByUserId(userId) {
        return models.address.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email', 'mobile', 'address', 'country', 'city', 'state', 'zipCode', 'isDefault', 'userId'],
            where: {userId}
        });
    }

    insert(address) {
        return models.address.create(address);
    }

    async update(address) {
        let result = await models.address.update({...address}, {where:{id: address.id}});
        return result;
    }
}

module.exports = new addressServices();