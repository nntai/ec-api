const productCollection = require('./product.model');
const BaseService = require('../base/base.service');
class ProductService extends BaseService {
  constructor() {
    super(productCollection);
  }

  // TODO: setup logics here
  getOutOfDateProducts() {
    return productCollection.find().exec();
  }
}

module.exports = new ProductService();
