const Order = require("../Model/orderModel");
const catchAsync = require("../Utils/catchAsync");

exports.getAllOrder = catchAsync(async (req, res, next) => {
  console.log(req.query);
  const orders = await Order.find(req.query);

  res.status(200).json({
    status: "success",
    count: orders.length,
    orders,
  });
});

exports.getOrder = catchAsync(async (req, res, next) => {
  const order = await Order.find({ _id: req.params.id });

  res.status(200).json({
    status: "success",
    order,
  });
});

exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create(req.body);

  res.status(200).json({
    status: "success",
    newOrder,
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  let updatedOrder;
  if (req.query.updateMany === "true") {
    delete req.query.updateMany;
    updatedOrder = await Order.updateMany(req.query, { $set: req.body });
  } else {
    updatedOrder = await Order.findOneAndUpdate(req.query, { $set: req.body });
  }

  res.status(200).json({
    status: "success",
    updatedOrder,
  });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  console.log(req.query, req.body);

  if (req.query.deleteMany === "true") {
    delete req.query.deleteMany;
    await Order.deleteMany(req.query);
  } else {
    await Order.deleteOne(req.query);
  }

  res.status(200).json({
    status: "success",
    message: "data successful deleted",
  });
});
