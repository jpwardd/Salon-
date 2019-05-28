const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  isEmployee: {
    type: Boolean,
    isRequired: true
  }
})

module.exports = Employee = mongoose.model('employee', EmployeeSchema);