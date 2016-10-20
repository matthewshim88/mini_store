var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ProductSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String},
  desc : {type: String, required: true},
  qty : {type: Number}
}, { timestamps: true});

mongoose.model('Product', ProductSchema);
