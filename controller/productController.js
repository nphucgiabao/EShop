const brandServices = require('../services/brandServices');
const categoryServices = require('../services/categoryServices');

class productController{
    constructor() {

    }

    async productList(req, res) {
        let data = await Promise.all([brandServices.getAll(), categoryServices.getAll()]);        
        res.render('product-list', {brands: data[0], categories: data[1]});       
    }

    productDetail(req, res){
        console.log(req.params);
        res.render('product-detail');
    }
}

module.exports = new productController();