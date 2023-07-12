class cartController{
    constructor(){

    }

    cart(req, res) {
        res.render('cart');
    }
}

module.exports = new cartController();