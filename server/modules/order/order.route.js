const BaseRouter = require('../base/base.route');
const OrderController = require('./order.controller');
const orderController = new OrderController();

module.exports = class OrderRouter extends BaseRouter {
  constructor() {
    super(orderController);
  }
  setup() {
    const router = this.init();

    // TODO: setup routers here

    return router;
  }
};
