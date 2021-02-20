const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  type: {
    type: String,
    enum: ['TOIT', 'MÄNGUASJAD', 'TARVIKUD'],
    required: true,
  },
  productName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  size: {
    type: String,
    required: false,
  },
  sizeUnit: {
    type: String,
    required: false,
  },
  colour: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 7,
  },
});

productsSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('products', productsSchema);
