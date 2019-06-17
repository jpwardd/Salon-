const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  owner: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'user'
   },
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  color: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tickets'
  }],
  
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Employee = mongoose.model('employee', EmployeeSchema);