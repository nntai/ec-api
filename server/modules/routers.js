const express = require('express');
const router = express.Router();

/* routers */
const productRouter = require('./order/order.route');
const orderRouter = require('./product/product.route');
const userRouter = require('./user/user.route');

module.exports = () => {
  router.use('/orders', orderRouter.setup());
  router.use('/products', productRouter.setup());
  router.use('/users', userRouter.setup());
  return router;
};
