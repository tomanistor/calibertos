const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BrandSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  locations: [{
    address: {
      street: String,
      city: String,
      state: String,
      zip: Number
    },
    burritos: [{
      name: String,
      image: String,
      type: String,
      price: Number,
      rating: {
        avg: Number,
        all: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
      },
      ingredients: {
        meats: [String],
        potatoes: [String],
        other: [String]
      }
    }]
  }]
});

module.exports = mongoose.model('Brand', BrandSchema);
