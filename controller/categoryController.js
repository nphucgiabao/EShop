const categoryServices = require('../services/categoryServices');

class categoryController{

    constructor() {

    }

    async viewAll(req, res) {
        let data = await categoryServices.getAll();
        res.render('categoies', {data});
    }

    addEdit(req, res) {
        res.render('addedit-categories');
    }

    async insertUpdate(req, res) {
        let rs = null;
        if(req.body.id) {
            rs = await categoryServices.update(req.body);
        } else {
            rs = await categoryServices.insert({ name: req.body.name});
        }        
        if(rs.success)
            res.send('true');
        else
            res.send(rs.error);
    }
}

module.exports = new categoryController();