const orderCollection = require('./order.model');
const BaseService = require('../base/base.service');
module.exports = class OrderService extends BaseService {
  constructor() {
    super(orderCollection);
  }

  // TODO: setup logics here
};
