const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // schema here
});

module.exports = mongoose.model('Order', orderSchema);
