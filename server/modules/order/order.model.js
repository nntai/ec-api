const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: String,
  total: Number,
});

module.exports = mongoose.model('Order', orderSchema);
