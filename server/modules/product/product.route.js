const express = require('express');
const controllers = require('./product.controller');
const router = express.Router();
router.get('/get', controllers.getAll);

module.exports = router;
