const express = require("express");
const productController = require("../Controller/productController");

const router = express.Router();

router.route("/").get(productController.getAllProduct).post(productController.createProduct);

module.exports = router;
