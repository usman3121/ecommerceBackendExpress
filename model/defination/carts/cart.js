const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Reference to the User model (assuming you have a user model)
  },
  status: String,
  total_price: Number,
  created_at: { type: Date, default: Date.now },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
