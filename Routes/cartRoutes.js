const express = require("express");
const cartController = require("../Controller/cartController");

const router = express.Router();

router.route("/").get(cartController.getCart);
// router.route("/:id").get(orderController.getOrder);

module.exports = router;
