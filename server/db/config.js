const PRODUCTION_URL = ''; // remove for git
const DEV_URL = 'mongodb://127.0.0.1:27017/ec-api';

module.exports = process.env === 'production' ? PRODUCTION_URL : DEV_URL;
