const mongoose = require("mongoose");

// "Order Date": "23/05/2022",

// "Product Code": 1,

// "Product Name": "Edible oil",

// "Product Quantity": 5,

// "Product Price": 90,

const orderSchema = new mongoose.Schema({
  "OrderNo.": {
    type: Number,
    required: [true, "Order must have a price"],
    unique: true,
  },
  "Order Date": {
    type: String,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  "CustNo.": {
    type: Number,
    required: [true, "Order must belong to a customer"],
  },
  "Product Code": {
    type: Number,
    required: [true, "Product must have a price"],
  },
  "Product Name": {
    type: String,
    required: [true, "Product must have a name"],
  },
  "Product Price": {
    type: Number,
    required: [true, "Product must have a price"],
  },
  "Product Quantity": {
    type: Number,
    required: [true, "Order must have a product quantity"],
  },
  Total: {
    type: Number,
    required: [true, "Order must have a total price"],
  },
  "ModeOf Payment": {
    type: String,
    enum: {
      values: ["Cash", "Online"],
      message: "Mode Of Payment is either: Cash or Online",
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
