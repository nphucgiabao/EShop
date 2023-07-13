class checkoutController{
    constructor(){

    }

    index(req, res){
        res.render('checkout');
    }
}

module.exports = new checkoutController();