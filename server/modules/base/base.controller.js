module.exports = class BaseController {
  constructor(service) {
    this.service = service;

    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.deleteDoc = this.deleteDoc.bind(this);
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
  }
  async insert(req, res) {
    try {
      const product = req.body;
      const result = await this.service.insert(product);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async update(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const product = req.body;
      const result = await this.service.update(id, product);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
  async get(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const result = await this.service.get(id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getAll(req, res) {
    try {
      const result = await this.service.getAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async deleteDoc(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const result = await this.service.delete(id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
