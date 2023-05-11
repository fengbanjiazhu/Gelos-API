const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    // required: [true, 'A user must have a name'],
  },
  username: {
    type: String,
    required: [true, "employee must have a user name"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "A user must have a password"],
    validate: {
      validator: function (el) {
        // if its same with the password passed in then its true
        // but its only working on CREATE and SAVE
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
    role: {
      type: String,
      required: [true, "A employee must have a role"],
      enum: ["employee", "manager", "admin"],
      default: "employee",
    },
  },
});

employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // delete password confirm field
  this.passwordConfirm = undefined;
  next();
});

employeeSchema.methods.correctPassword = async function (typedInPassword, dbSavedPassword) {
  return await bcrypt.compare(typedInPassword, dbSavedPassword);
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
