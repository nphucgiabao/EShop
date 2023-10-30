const express = require('express');
const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');
const checkoutRoute = require('./checkoutRoute');
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const brandRoute = require('./brandRoute');
const categoryRoute = require('./categoryRouter');
const orderRoute = require('./orderRoute');

function route(app) {
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use('/', homeRoute);
    app.use('/product', productRoute);
    app.use('/cart', cartRoute);
    app.use('/checkout', checkoutRoute);
    app.use('/user', authRoute);
    app.use('/user', userRoute);   
    app.use('/brand', brandRoute);
    app.use('/categories', categoryRoute);
    app.use('/order', orderRoute);
}

module.exports = route;