const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductCode: {
    type: Number,
    required: [true, "Product must have a price"],
    unique: true,
  },
  ProductName: {
    type: String,
    required: [true, "Product must have a name"],
  },
  Product_price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  ProductQuantity: {
    type: Number,
    required: [true, "Product must have a quantity"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
