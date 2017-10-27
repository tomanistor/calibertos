const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RatingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  burritoId: { type: Schema.Types.ObjectId, ref: 'Burrito' },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('Rating', RatingSchema);
