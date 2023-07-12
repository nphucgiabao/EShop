const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');

function route(app){
    app.use('/', homeRoute);
    app.use('/product', productRoute);
    app.use('/cart', cartRoute);
    console.log('aa');
}

module.exports = route;