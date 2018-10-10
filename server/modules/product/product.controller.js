const productService = require('./product.service');

// product
async function insert(req, res) {
  try {
    const product = req.body;
    const result = await productService.insert(product);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getAll(req, res) {
  try {
    const result = await productService.getAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  insert,
  getAll,
};
