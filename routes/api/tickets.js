const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const config = require('config');

const Ticket = require('../../models/Ticket');
// POST api/tickets
router.post('/', [ auth, [
  check('services', 'Please add a service')
    .not()
    .isEmpty(),
  check('contact', 'Please add a contact')
    .not()
    .isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { services, contact } = req.body;
  
  const ticketFields = {}
  
  ticketFields.user = req.user.id;

  if (services) ticketFields.services = services;
  if (contact) ticketFields.contact = contact;

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
    const services = await Ticket.find({ user: req.user.id}).populate('ticket', ['user', 'services', 'contact', 'date'])
    res.json(services)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;