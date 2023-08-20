const express = require('express');
const route = express.Router();
const categoryController = require('../controller/categoryController');

route.get('/', categoryController.viewAll);
route.get('/addedit', categoryController.addEdit);
route.post('/addedit', categoryController.insertUpdate);

module.exports = route;