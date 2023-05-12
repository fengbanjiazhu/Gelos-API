const Cart = require("../Model/cartModel");
const catchAsync = require("../Utils/catchAsync");

exports.getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.find(req.query);

  res.status(200).json({
    status: "success",
    cart,
  });
});

exports.createCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.create(req.body);

  res.status(200).json({
    status: "success",
    cart,
  });
});

exports.updateCart = catchAsync(async (req, res, next) => {
  let updatedCart;
  if (req.query.updateMany === "true") {
    delete req.query.updateMany;
    updatedCart = await Cart.updateMany(req.query, { $set: req.body });
  } else {
    updatedCart = await Cart.findOneAndUpdate(req.query, { $set: req.body });
  }

  res.status(200).json({
    status: "success",
    updatedCart,
  });
});

exports.deleteCart = catchAsync(async (req, res, next) => {
  console.log(req.query, req.body);

  if (req.query.deleteMany === "true") {
    delete req.query.deleteMany;
    await Cart.deleteMany(req.query);
  } else {
    await Cart.deleteOne(req.query);
  }

  res.status(200).json({
    status: "success",
    message: "data successful deleted",
  });
});
