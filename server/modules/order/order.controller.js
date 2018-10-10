// const Order = require('./order.model');

// product
function getOrder(req, res) {
  try {
    res.send(200, 'order here!');
  } catch (err) {
    res.send(400, err);
  }
}

module.exports = {
  getOrder,
};
