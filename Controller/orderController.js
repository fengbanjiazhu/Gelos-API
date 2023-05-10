const Order = require("../Model/orderModel");
const catchAsync = require("../Utils/catchAsync");

exports.getAllOrder = catchAsync(async (req, res, next) => {
  const orders = await Order.find({});

  res.status(200).json({
    status: "success",
    orders,
  });
});
