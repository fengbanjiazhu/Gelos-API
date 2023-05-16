const express = require("express");
const employeeController = require("../Controller/employeeController");
const authController = require("../Controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    employeeController.getAllEmployee
  )
  .post(employeeController.createEmployee)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    employeeController.updateEmployee
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    employeeController.deleteEmployee
  );

router.route("/Me").patch(authController.protect, employeeController.updateMe);

router.route("/login").post(authController.login);

module.exports = router;
