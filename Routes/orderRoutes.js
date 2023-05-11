const express = require("express");
const orderController = require("../Controller/orderController");
const authController = require("../Controller/authController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAllOrder)
  .post(orderController.createOrder)
  .patch(orderController.updateOrder)
  .delete(authController.protect, authController.restrictTo("admin"), orderController.deleteOrder);
router.route("/:id").get(orderController.getOrder);

module.exports = router;
