const Cart = require("../Model/cartModel");
const catchAsync = require("../Utils/catchAsync");

exports.getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.find(req.query);

  res.status(200).json({
    status: "success",
    cart,
  });
});
