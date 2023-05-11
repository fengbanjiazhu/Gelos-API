const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNo: {
    type: Number,
    required: [true, "Order must have a price"],
    unique: true,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  custNo: {
    type: Number,
    required: [true, "Order must belong to a customer"],
  },
  productCode: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  productName: {
    type: String,
    required: [true, "Product must have a name"],
  },
  productPrice: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  productQuantity: {
    type: Number,
    required: [true, "Order must have a product quantity"],
  },
  total: {
    type: Number,
  },
  paymentMethod: {
    type: String,
    enum: {
      values: ["Cash", "Online"],
      message: "Payment method is either: Cash or Online",
    },
  },
  OrderCount: {
    type: Number,
  },
});

orderSchema.pre("save", function (next) {
  if (!this.total) this.total = this.productPrice * this.productQuantity;
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
