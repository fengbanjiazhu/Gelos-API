const Product = require("../Model/productModel");
const catchAsync = require("../Utils/catchAsync");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find({});

  res.status(200).json({
    status: "success",
    products,
  });
});
