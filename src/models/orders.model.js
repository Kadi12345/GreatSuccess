const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  orderNumber: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  orderStatus: {
    type: String,
    enum: ["MAKSTUD", "KOMPLEKTEERITUD", "SAADETUD", "TÜHISTATUD"],
    required: true,
  },
  products: [
    {
      productID:{
        type: Schema.Types.ObjectId,
        ref: "products"
      },
      productName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
      },
      quantity: {
        type: Number,
        required: true,
        maxlength: 3,
      },
      colour: {
        type: String,
        required: false,
      },
      size: {
        type: String,
        required: false,
      },
      sizeUnit: { 
        type: String,
        required: false 
      },
      description:  { 
        type: String, 
        required: false, 
        minlength: 2, 
        maxlength: 100 },
      price: {
        type: Number,
        required: true,
        maxlength: 7,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
  client:[
    {
      clientID:{
        type: Schema.Types.ObjectId,
        ref: "users"
      }, 
      firstName: { 
        type: String, 
        required: true, 
        minlength: 2, 
        maxlength: 15 
      },
    lastName: { 
        type: String, 
        required: true, 
        maxlength: 15 
      },
    email: { 
        type: String, 
        required: true  
      },
    address: { 
        type: String, 
        required: true 
      },
    },
  ],
  deliveryMethod: {
    type: String,
    enum: ["KULLER", "PAKIAUTOMAAT"],
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: false,
  },
  parcelMachine: {
    type: String,
    enum: ["Männimäe", "Paalalinn", "Kantreküla", "Peetrimõisa", "Uueveski"],
  },
});

ordersSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("orders", ordersSchema);
