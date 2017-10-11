const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BrandSchema = new Schema({
  name: String,
  image: String,
  locations: {
    address: {
      street: String,
      city: String,
      state: String,
      zip: Number
    },
    burritos: {
      _burritoId: Schema.Types.ObjectId,
      name: String,
      image: String,
      type: String,
      price: Number,
      rating: Number,
      ingredients: {
        meats: [],
        potatoes: []
      }
    }
  }
});

module.exports = mongoose.model('Brand', BrandSchema);
