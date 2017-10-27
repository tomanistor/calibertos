const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LocationSchema = new Schema({
  brandId: { type: Schema.Types.ObjectId, ref: 'Brand' }
  lat: Number,
  lng: Number,
  address: {
    street: String,
    city: String,
    state: String,
    zip: Number,
    phone: String
  },
  burritos: [{ type: Schema.Types.ObjectId, ref: 'Burrito' }]
});

module.exports = mongoose.model('Location', LocationSchema);
