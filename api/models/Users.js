const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});

module.exports = mongoose.model('User', UserSchema);
