const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
    require: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
    default: 1,
  },
  price: {
    type: Number,
    require: true,
  },
  discountedPrice: {
    type: Number,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

const cartItems = mongoose.model("cartItems", cartItemSchema);
module.exports = cartItems;
