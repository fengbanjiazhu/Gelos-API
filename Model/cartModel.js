const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Cart must have a customer name"],
  },
  products: [
    {
      type: String,
      required: [true, "Cart must have a product"],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
    // expires in 1 day
    expires: 86400,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
