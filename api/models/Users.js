const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  ratings: []
});

module.exports = mongoose.model('User', UserSchema);
