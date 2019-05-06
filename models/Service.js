const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

module.exports = Service = mongoose.model('service', ServiceSchema);