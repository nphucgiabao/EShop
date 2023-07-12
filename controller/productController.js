class productController{
    constructor() {

    }

    productList(req, res){
        res.render('product-list');
    }

    productDetail(req, res){
        console.log(req.params);
        res.render('product-detail');
    }
}

module.exports = new productController();