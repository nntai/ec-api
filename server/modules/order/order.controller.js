const BaseController = require('../base/base.controller');
const orderService = require('./order.service');

class OrderController extends BaseController {
  constructor() {
    super(orderService);
  }

  // TODO: define controllers here
}

module.exports = new OrderController();
