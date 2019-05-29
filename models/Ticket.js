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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'service',
    required: true
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contact',
    required: true
  }
})

module.exports = Ticket = mongoose.model('ticket', TicketSchema);