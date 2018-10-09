const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // schema here
});

module.exports = mongoose.model('Product', productSchema);
