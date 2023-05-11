const express = require("express");
const employeeController = require("../Controller/employeeController");

const router = express.Router();

router.route("/").get(employeeController.getEmployee).post(employeeController.createEmployee);

module.exports = router;
