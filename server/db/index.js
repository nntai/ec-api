const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const DB_URL = require('./config');

module.exports = () => {
  // setup mongo
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      DB_URL,
      { useNewUrlParser: true },
    )
    .then(() => console.log('Connected MongoDB'))
    .catch(err => console.error(err));
  // create schema for collections
  // find *.model.js file in modules
  const modulesPath = path.resolve(__dirname, '../modules');
  const models = fs
    .readdirSync(modulesPath)
    .filter(file => fs.statSync(`${modulesPath}/${file}`).isDirectory());
  models.forEach(model => {
    const modelPath = `${modulesPath}/${model}/${model}.model.js`;
    if (fs.existsSync(modelPath)) {
      require(`${modulesPath}/${model}/${model}.model.js`); // eslint-disable-line
    }
  });
};
