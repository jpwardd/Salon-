const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  },
  services: {
    type: String,
    ref: 'service',
    required: true
  },
  client: {
    type: String,
    required: true
  },
  bookingInfo: {
    type: String
  }
})

module.exports = Ticket = mongoose.model('ticket', TicketSchema);