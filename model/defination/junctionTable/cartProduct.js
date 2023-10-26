const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number, // You can add a quantity field if you need to track how many of each product is in a cart.
});

const CartProduct = mongoose.model("CartProduct", cartProductSchema);

module.exports = CartProduct;
