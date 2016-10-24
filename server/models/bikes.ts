var mongoose = require('mongoose');

let BikesSchema = new mongoose.Schema({
  'brand': String,
  'model': String,
  'description': String, 
  'weight': Number,
  'pictures': Array,
  'price': Number,
  'reviews': Array    
});

module.exports = mongoose.model('Bikes', BikesSchema);