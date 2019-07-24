const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
  color: {
    type: String,
  },
  employee: {
    type: Boolean,
  },
  manager: {
    type: Boolean,
  },
  owner: {
    type: Boolean,
  },
  receptionist: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('user', UserSchema);