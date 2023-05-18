const express = require("express");
const productController = require("../Controller/productController");
const authController = require("../Controller/authController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.createProduct)
  .patch(productController.updateProduct)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    productController.deleteProduct
  );

router.route("/:id").get(productController.getProduct);

module.exports = router;
