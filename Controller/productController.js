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

exports.updateProduct = catchAsync(async (req, res, next) => {
  let updatedProduct;
  if (req.query.updateMany === "true") {
    delete req.query.updateMany;
    updatedProduct = await Product.updateMany(req.query, { $set: req.body });
  } else {
    updatedProduct = await Product.findOneAndUpdate(req.query, { $set: req.body });
  }

  res.status(200).json({
    status: "success",
    updatedProduct,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  console.log(req.query, req.body);

  if (req.query.deleteMany === "true") {
    delete req.query.deleteMany;
    await Product.deleteMany(req.query);
  } else {
    await Product.deleteOne(req.query);
  }

  res.status(200).json({
    status: "success",
    message: "data successful deleted",
  });
});
