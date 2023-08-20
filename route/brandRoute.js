const express = require('express');
const brandController = require('../controller/brandController');
const route = express.Router();

route.get('/addedit', brandController.addEdit);
route.post('/addedit', brandController.insertUpdate);
route.get('/view', brandController.viewAll);
route.get('/all', brandController.getAll);

module.exports = route;