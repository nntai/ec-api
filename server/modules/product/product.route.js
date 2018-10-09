const controllers = require('./product.controller');

module.exports = [
  { method: 'get', url: '/get', handler: controllers.getProduct },
];
