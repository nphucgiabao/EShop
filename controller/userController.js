const orderServices = require('../services/orderServices');
const addressServices = require('../services/addressServices');
const userServices = require('../services/userServices');
const {appMessage} = require('../util/appHelper');

class userController{
    constructor(){

    }

    async index(req, res) {
        let data = await Promise.all([orderServices.getByUserId(req.user.id), addressServices.getByUserId(req.user.id), userServices.findById(req.user.id)]);
        res.locals.orders = data[0];
        res.locals.addresses = data[1];
        res.locals.account = data[2];
        res.render('my-account', {csrfToken: req.csrfToken()});
    }

    async editAddress(req, res) {
        res.locals.address = await addressServices.getById(parseInt(req.query.id))
        res.locals.csrfToken = req.csrfToken();
        res.render('editAddress', { layout: false });
    }

    async updateAddress(req, res) {
        let result = await addressServices.update(req.body);
        if (result > 0)
            return res.json({ success: true, message: appMessage.saveSuccess });
        return res.json({ success: false, message: appMessage.saveError });
    }

    updateAccount(req, res) {

    }

    updatePassword(req, res) {
        
    }
}

module.exports = new userController();