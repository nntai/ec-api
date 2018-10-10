const express = require('express');
const router = express.Router();

/* routers */
const orderRouter = require('./order/order.route');
const productRouter = require('./product/product.route');

module.exports = () => {
  router.use('/orders', orderRouter);
  router.use('/products', productRouter);
  return router;
};
