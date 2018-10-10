const Product = require('./product.model');

// product
function getProduct(req, res) {
  const products = Product.find();
  res.json({ product: products });
}

module.exports = {
  getProduct,
};
