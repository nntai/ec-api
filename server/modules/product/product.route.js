const BaseRouter = require('../base/base.route');
const ProductController = require('./product.controller');
const productController = new ProductController();

module.exports = class ProductRouter extends BaseRouter {
  constructor() {
    super(productController);
  }
  setup() {
    const router = this.init();

    // TODO setup routers here
    router.get('/outofdate', productController.getOutOfDateProducts);

    return router;
  }
};
