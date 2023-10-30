const express = require('express');
const route = express.Router();
const orderController = require('../controller/orderController');

route.get('/details', orderController.getOrderDetails);

module.exports = route;