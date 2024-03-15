const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

  fName: {
    type: String,
    required: true
  },

  mName: {
    type: String,
    required: true
  },

  lName: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    min: 18,
    max: 50,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  birthday: {
    type: Date,
    required: true
  },

  vaccinated: {
    type: Boolean,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Employee = mongoose.model('employee_details', EmployeeSchema);
module.exports = Employee;