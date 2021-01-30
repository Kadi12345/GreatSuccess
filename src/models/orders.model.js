const mongoose = require("mongoose");
const { schema } = require("./users.model");
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

  parcelMachine: {
    type: String,
    enum: ["Männimäe", "Paalalinn", "Kantreküla", "Peetrimõisa", "Uueveski"],
  },
});

const addressSchema = new Schema({
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: Number}
});

schema.add ({
  deliveryAddress: addressSchema
});

ordersSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("orders", ordersSchema);