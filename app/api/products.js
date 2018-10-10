import axios from 'axios';

export default class Products {
  constructor() {
    this.resourceUrl = '/products';
  }

  list(filter) {
    return axios.get(this.resourceUrl, filter);
  }

  get(id) {
    return axios.get(`${this.resourceUrl}/${id}`);
  }
}
