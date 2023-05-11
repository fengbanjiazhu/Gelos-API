const express = require("express");
const employeeController = require("../Controller/employeeController");
const authController = require("../Controller/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, authController.restrictTo("admin"), employeeController.getEmployee)
  .post(employeeController.createEmployee)
  .patch();

router.route("/login").post(authController.login);

module.exports = router;
