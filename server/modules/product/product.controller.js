const BaseController = require('../base/base.controller');
const productService = require('./product.service');

class ProductController extends BaseController {
  constructor() {
    super(productService);
  }

  // TODO: define controllers here

  async getOutOfDateProducts(req, res) {
    try {
      const result = await productService.getOutOfDateProducts();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = new ProductController();
