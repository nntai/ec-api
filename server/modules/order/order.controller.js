const BaseController = require('../base/base.controller');
const OrderService = require('./order.service');

const productService = new OrderService();

module.exports = class OrderController extends BaseController {
  constructor() {
    super(productService);
  }

  // TODO: define controllers here
};
