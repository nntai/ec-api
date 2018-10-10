const controllers = require('./product.controller');

module.exports = [{ method: 'get', url: '/', handler: controllers.getProduct }];
