const BaseRouter = require('../base/base.route');
const productController = require('./product.controller');

class ProductRouter extends BaseRouter {
  constructor() {
    super(productController);
  }
  setup() {
    const router = this.init();

    // TODO setup routers here
    router.get('/outofdate', productController.getOutOfDateProducts);

    return router;
  }
}

module.exports = new ProductRouter();
