const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BrandSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }]
});

module.exports = mongoose.model('Brand', BrandSchema);
