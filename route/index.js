const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');
const checkoutRoute = require('./checkoutRoute');
const userRoute = require('./userRoute');

function route(app) {
    app.use((req, res, next) => {
        console.log(req.url);
        next();
    });
    app.use('/', homeRoute);
    app.use('/product', productRoute);
    app.use('/cart', cartRoute);
    app.use('/checkout', checkoutRoute);
    app.use('/user', userRoute);   
}

module.exports = route;