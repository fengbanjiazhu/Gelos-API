const express = require("express");
const orderController = require("../Controller/orderController");

const router = express.Router();

router.route("/").get(orderController.getAllOrder);
router.route("/:id").get(orderController.getOrder);

module.exports = router;
