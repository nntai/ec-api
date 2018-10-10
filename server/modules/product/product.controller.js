const mongoose = require('mongoose');
const Product = mongoose.model('product');
class ProductController {
  static getProducts(params) {
    return Product.find(params);
  }
}

module.exports = ProductController;
