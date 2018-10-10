// implements product logics here
const productCollections = require('./product.model');

function insert(product) {
  return productCollections.create(product);
}

function deleteProduct(id) {
  return productCollections.deleteOne(id).exec();
}

function getAll() {
  return productCollections.find().exec();
}

function getOutOfDate() {
  return productCollections.find().exec();
}

module.exports = {
  insert,
  delete: deleteProduct,
  getAll,
  getOutOfDate,
};
