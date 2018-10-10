const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // schema here
});

module.exports = mongoose.model('User', userSchema);
