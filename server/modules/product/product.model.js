const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    categoryId: String,
    available: Boolean,
  },
  {
    collection: 'product',
  },
);

module.exports = mongoose.model('product', productSchema);
