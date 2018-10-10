module.exports = class BaseService {
  constructor(collection) {
    this.collection = collection;
  }

  insert(product) {
    return this.collection.create(product);
  }

  update(id, newDoc) {
    const updated = {
      $set: newDoc,
    };
    return this.collection.updateOne({ _id: id }, updated).exec();
  }

  deleteDoc(id) {
    return this.collection.deleteOne({ _id: id }).exec();
  }

  get(id) {
    return this.collection.findOne({ _id: id }).exec();
  }

  getAll() {
    return this.collection.find().exec();
  }
};
