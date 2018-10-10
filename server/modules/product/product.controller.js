const productService = require('./product.service');

// product
async function insert(req, res) {
  try {
    const product = req.body;
    const result = await productService.insert(product);
    res.send(200, result);
  } catch (err) {
    res.send(400, err);
  }
}

async function getAll(req, res) {
  try {
    const result = await productService.getAll();
    res.send(200, result);
  } catch (err) {
    res.send(400, err);
  }
}

module.exports = {
  insert,
  getAll,
};
