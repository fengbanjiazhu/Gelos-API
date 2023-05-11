const Product = require("../Model/productModel");
const catchAsync = require("../Utils/catchAsync");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find(req.query);

  res.status(200).json({
    status: "success",
    products,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(200).json({
    status: "success",
    products,
  });
});
