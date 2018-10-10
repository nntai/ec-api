const ProductController = require('./product.controller');

class ProductService {
  static getProducts(req, res, next) {
    ProductController.getProducts(req.query)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).end();
        }
      })
      .catch(next);
  }
}

module.exports = [
  { method: 'get', url: '/', handler: ProductService.getProducts },
];
