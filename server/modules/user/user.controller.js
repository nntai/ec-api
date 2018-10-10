const BaseController = require('../base/base.controller');
const userService = require('./user.service');

class UserController extends BaseController {
  constructor() {
    super(userService);
  }

  // TODO: define controllers here
}

module.exports = new UserController();
