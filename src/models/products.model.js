const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  ProductID: { type: String, unique: true, required: true, minlength: 1, maxlength: 10, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid'] },
  Type: {type: String, enum : ['TOIT','MÄNGUASJAD','TARVIKUD'], required: true},
  ProductName: { type: String, required: true, minlength: 2, maxlength: 100 },
  Size: {  type: String, required: false},
  SizeUnit: { type: String,required: false },
  Colour: {  type: String, required: false},
  Description:  { type: String, required: false, minlength: 2, maxlength: 100 },
  Price:{ type: Number, required: true, maxlength: 7 },
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('products', schema)