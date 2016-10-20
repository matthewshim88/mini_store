var mongoose = require('mongoose');
var Schema = mongoose.Schema

var OrderSchema = new Schema({
  _product: {type: Schema.Types.ObjectId, ref: "Product"},
  _customer: {type: Schema.Types.ObjectId, ref: "Customer"},
  qty: {type: Number}
}, {timestamps:true});

mongoose.model('Order', OrderSchema);
