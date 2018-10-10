const express = require('express');

module.exports = class BaseRouter {
  constructor(controller) {
    this.controller = controller;
  }

  init() {
    const router = express.Router();
    router.post('/insert', this.controller.insert);
    router.post('/update/:id', this.controller.update);
    router.get('/delete/:id', this.controller.deleteDoc);
    router.get('/getAll', this.controller.getAll);
    router.get('/get/:id', this.controller.get);
    return router;
  }
};
