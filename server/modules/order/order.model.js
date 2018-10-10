const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  // schema here
});

module.exports = mongoose.model('Order', orderSchema);
