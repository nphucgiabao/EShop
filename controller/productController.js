const brandServices = require('../services/brandServices');
const categoryServices = require('../services/categoryServices');
const productServices = require('../services/productServices');

class productController{
    constructor() {

    }

    async productList(req, res) {
        let data = await Promise.all([productServices.getAll(), brandServices.getAll(), categoryServices.getAll()]);        
        res.render('product-list', {products: data[0], brands: data[1], categories: data[2]});       
    }

    async productDetail(req, res) {
        let product = await productServices.getById(req.params.id);
        res.render('product-detail', {product: product.pop()});
    }

    async viewAll(req, res){
        res.locals.products = await productServices.getAll();
        res.render('products');
    }

    async addEdit(req, res) {
        let obj = {};
        if(req.query.id) {
            let product = await productServices.getById(req.query.id);
            obj = product.pop();
        }
        let data = await Promise.all([brandServices.getAll(), categoryServices.getAll()]);        
        res.locals.brands = data[0];
        res.locals.categories = data[1];
        res.render('addedit-product', obj);
    }

    async insertUpdate(req, res) {
        let rs = null;
        if (req.body.id) {
            rs = await productServices.update(req.body);
        } else {
            rs = await productServices.insert({
                name: req.body.name, 
                imagePath: req.body.imagePath,
                oldPrice: parseInt(req.body.oldPrice),
                price: parseFloat(req.body.price),
                summary: req.body.summary,
                description: req.body.description,
                specification: req.body.specification,
                stars: parseInt(req.body.stars),
                quantity: parseInt(req.body.quantity),
                brandId: parseInt(req.body.brandId),
                categoryId: parseInt(req.body.categoryId)
            });
        }        
        if(rs.success)
            res.send('true');
        else
            res.send(rs.error);
    }
}

module.exports = new productController();