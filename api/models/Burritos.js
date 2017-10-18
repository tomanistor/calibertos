const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BurritoSchema = new Schema({
  brandId: [{ type: Schema.Types.ObjectId, ref: 'Brand' }],
  locationId: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
  name: { type: String, default: 'California Burrito' },
  image: String,
  type: { type: String, default: 'California Burrito' },
  price: Number,
  weight: Number,
  length: Number,
  rating: {
    avg: Number,
    all: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
  },
  ingredients: {
    meats: [String],
    potatoes: [String],
    other: [String]
  }
});

module.exports = mongoose.model('Burrito', BurritoSchema);
