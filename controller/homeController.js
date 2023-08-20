const brandServices = require('../services/brandServices');

class homeController {
    constructor(){

    }

    async index(req, res) {
        let brands = await brandServices.getAll();
        res.render('index', {brands});
    }
}

module.exports = new homeController();