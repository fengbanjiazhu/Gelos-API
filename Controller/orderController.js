const Order = require("../Model/orderModel");
const catchAsync = require("../Utils/catchAsync");

exports.getAllOrder = catchAsync(async (req, res, next) => {
  const orders = await Order.find({});

  res.status(200).json({
    status: "success",
    orders,
  });
});

exports.getOrder = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const order = await Order.find({ _id: req.params.id });

  res.status(200).json({
    status: "success",
    order,
  });
});
