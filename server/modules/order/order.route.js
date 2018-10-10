const express = require('express');
const controllers = require('./order.controller');

const router = express.Router();

router.get('/get', controllers.getOrder);

module.exports = router;
