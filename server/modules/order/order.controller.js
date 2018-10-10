// const Order = require('./order.model');

// product
function getOrder(req, res) {
  try {
    res.status(200).send('order here!');
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getOrder,
};
