const Product = require("../Model/productModel");
const centralController = require("./centreController");

exports.getAllProduct = centralController.getAll(Product);
exports.getProduct = centralController.getOne(Product);
exports.createProduct = centralController.createData(Product);
exports.updateProduct = centralController.updateData(Product);
exports.deleteProduct = centralController.deleteData(Product);
