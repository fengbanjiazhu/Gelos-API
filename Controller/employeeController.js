const Employee = require("../Model/employeeModel");
const catchAsync = require("../Utils/catchAsync");

exports.getEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.find(req.query);

  res.status(200).json({
    status: "success",
    employee,
  });
});

exports.createEmployee = catchAsync(async (req, res, next) => {
  const dataFilter = {
    ...req.body,
    role: "employee",
  };
  console.log(req.body);

  const employee = await Employee.create(dataFilter);

  res.status(200).json({
    status: "success",
    employee,
  });
});
