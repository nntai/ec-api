const BaseRouter = require('../base/base.route');
const userController = require('./user.controller');

class UserRouter extends BaseRouter {
  constructor() {
    super(userController);
  }
  setup() {
    const router = this.init();

    // TODO: setup routers here

    return router;
  }
}

module.exports = new UserRouter();
