const express = require("express");
const productController = require("../Controller/productController");

const router = express.Router();

router.route("/").get(productController.getAllProduct);

module.exports = router;
