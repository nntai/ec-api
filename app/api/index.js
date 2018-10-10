// import axios from 'axios';
import products from './products';
const baseUrl = '/api/v1/';

export default class Api {
  constructor() {
    this.baseUrl = baseUrl;
    this.products = products;
  }
}
