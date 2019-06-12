const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  owner: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'user'
   },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isEmployee: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Employee = mongoose.model('employee', EmployeeSchema);