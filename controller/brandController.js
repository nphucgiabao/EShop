const brandServices = require('../services/brandServices');

class brandController{

    constructor() {
    }

    async addEdit(req, res) {
        let obj = {};
        if(req.query.id) {
            let brand = await brandServices.getById(req.query.id);
            obj = brand.pop();
        }
        res.render('addedit-brand', obj);
    }

    async viewAll(req, res) {
        let data = await brandServices.getAll();
        res.locals.brands = data;
        res.render('brand');
    }

    async insertUpdate(req, res) {
        let rs = null;
        if(req.body.id) {
            rs = await brandServices.update(req.body);
        } else {
            rs = await brandServices.insert({name: req.body.name, imaePath: req.body.imagePath});
        }        
        if(rs.success)
            res.send('true');
        else
            res.send(rs.error);
    }

    async getAll(req, res) {
        let data = await brandServices.getAll();
        res.json(data);
    }
}

module.exports = new brandController();