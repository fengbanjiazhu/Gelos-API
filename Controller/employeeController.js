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

exports.updateEmployee = catchAsync(async (req, res, next) => {
  let updatedEmployee;
  if (req.query.updateMany === "true") {
    delete req.query.updateMany;
    updatedEmployee = await Employee.updateMany(req.query, { $set: req.body });
  } else {
    updatedEmployee = await Employee.findOneAndUpdate(req.query, { $set: req.body });
  }

  res.status(200).json({
    status: "success",
    updatedEmployee,
  });
});

exports.deleteEmployee = catchAsync(async (req, res, next) => {
  console.log(req.query, req.body);

  if (req.query.deleteMany === "true") {
    delete req.query.deleteMany;
    await Employee.deleteMany(req.query);
  } else {
    await Employee.deleteOne(req.query);
  }

  res.status(200).json({
    status: "success",
    message: "data successful deleted",
  });
});
