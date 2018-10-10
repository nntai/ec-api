const express = require('express');
const router = express.Router();

/* routers */
const OrderRouter = require('./order/order.route');
const ProductRouter = require('./product/product.route');

const productRouter = new ProductRouter().setup();
const orderRouter = new OrderRouter().setup();
module.exports = () => {
  router.use('/orders', orderRouter);
  router.use('/products', productRouter);
  return router;
};
