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
  service: {
    type: [String],
    required: true
  },
  client: {
    type: String,
    required: true
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
  },
  bookingInfo: {
    type: String
  }
})

module.exports = Ticket = mongoose.model('ticket', TicketSchema);