const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');
const checkoutRoute = require('./checkoutRoute');

function route(app){
    app.use('/', homeRoute);
    app.use('/product', productRoute);
    app.use('/cart', cartRoute);
    app.use('/checkout', checkoutRoute);
}

module.exports = route;