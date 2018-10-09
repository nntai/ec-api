const controllers = require('./order.controller');

// router.get('/', controllers.index);

module.exports = [
  { method: 'get', url: '/get', handler: controllers.getOrder },
];
