const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee'
  }
})

module.exports = Client = mongoose.model('client', ContactSchema);