const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Ticket = require('../../models/Ticket');

// POST api/tickets
router.post('/', [ auth, [
  check('service', 'Please add a service')
    .not()
    .isEmpty(),
  check('client', 'Please add a client')
    .not()
    .isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { service, client, employee, bookingInfo, date } = req.body;
  
  const ticketFields = {}
  
  ticketFields.user = req.user.id;
  
  if (service) ticketFields.service = service;
  if (client) ticketFields.client = client;
  if (employee) ticketFields.employee = employee;
  if (bookingInfo) ticketFields.bookingInfo = bookingInfo;
  if (date) ticketFields.date = date;

  try {
    // Create
    ticket = new Ticket(ticketFields);
   
    await ticket.save();
    res.json(ticket)
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// GET api/tickets
// description: get all tickets
// @access private

router.get('/', auth, async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('ticket')
    
    res.json(tickets)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;