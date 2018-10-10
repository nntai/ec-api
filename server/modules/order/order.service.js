const orderCollection = require('./order.model');
const BaseService = require('../base/base.service');
class OrderService extends BaseService {
  constructor() {
    super(orderCollection);
  }

  // TODO: setup logics here
}

module.exports = new OrderService();
