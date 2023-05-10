const express = require("express");
const orderController = require("../Controller/orderController");

const router = express.Router();

router.route("/").get(orderController.getAllOrder);

module.exports = router;
