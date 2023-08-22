const brandServices = require('../services/brandServices');
const categoryServices = require('../services/categoryServices');
const productServices = require('../services/productServices');

class productController{
    constructor() {

    }

    async productList(req, res) {
        let data = await Promise.all([productServices.getAll(), brandServices.getAll(), categoryServices.getAll()]);        
        res.render('product-list', {brands: data[1], categories: data[2]});       
    }

    async productDetail(req, res) {
        let obj = await productServices.getById(req.query.id);
        res.render('product-detail', obj);
    }
}

module.exports = new productController();