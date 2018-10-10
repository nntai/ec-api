const BaseRouter = require('../base/base.route');
const orderController = require('./order.controller');

class OrderRouter extends BaseRouter {
  constructor() {
    super(orderController);
  }
  setup() {
    const router = this.init();

    // TODO: setup routers here

    return router;
  }
}

module.exports = new OrderRouter();
