const userCollection = require('./user.model');
const BaseService = require('../base/base.service');
class UserService extends BaseService {
  constructor() {
    super(userCollection);
  }

  // TODO: setup logics here
}

module.exports = new UserService();
