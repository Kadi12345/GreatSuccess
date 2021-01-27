const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
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
      productName: {
        type: Schema.Types.ObjectId,
        ref: "products",
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
        type: Schema.Types.ObjectId,
        ref: "products",
        required: false,
      },
      size: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: false,
      },
      price: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
        maxlength: 7,
      },
    },
  ],

  totalPrice: {
    type: Number,
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  deliveryMethod: {
    type: String,
    enum: ["KULLER", "PAKIAUTOMAAT"],
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: false,
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  parcelMachine: {
    type: String,
    enum: ["Männimäe", "Paalalinn", "Kantreküla", "Peetrimõisa", "Uueveski"],
  },
});

ordersSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("orders", ordersSchema);
