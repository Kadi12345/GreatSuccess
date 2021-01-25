const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  createdDate: { type: Date, default: Date.now },
  orderStatus: { type: String, enum: ['MAKSTUD', 'KOMPLEKTEERITUD', 'SAADETUD', 'TÜHISTATUD'], required: true },
  productName: { type: String, required: true, minlength: 2, maxlength: 100 },
  quantity: { type: Number, required: true, maxlength: 3 },
  colour: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, required: true, maxlength: 7 },
  client: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  deliveryMethod: { type: String, enum: ['KULLER', 'PAKIAUTOMAAT'], required: true },
  address: { type: String, required: false, street: String, city: String, state: String, zip: Number },
  parcelMachine: { type: String, enum: ['Männimäe', 'Paalalinn', 'Katreküla', 'Peetrimõisa'], required: false }
},
)

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('orders', schema)