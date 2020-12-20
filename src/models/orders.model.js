const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrdersSchema = new Schema({
  OrderID: { type: String, unique: true, required: true, minlength: 1, maxlength: 10, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid'] },
  OrderStatus: {type: String, enum : ['MAKSTUD','KOMPLEKTEERITUD','SAADETUD','TÜHISTATUD'], required: true},
  ProductName: { type: String, required: true, minlength: 2, maxlength: 100 },
  Quantity: { type: Number, required: true, maxlength: 3 },
  Colour: {  type: String, required: false},
  Size: {  type: String, required: false},
  Price: { type: Number, required: true, maxlength: 7 },
  Client: {  type: Number, required: true},
  DeliveryMethod: {type: String, enum : ['KULLER','PAKIAUTOMAAT'], required: true},
  Address: { type: String, required: true, street: String, city: String, state: String, zip: Number },
  ParcelMachine: { type: String },

},
)

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('orders', OrdersSchema)