const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Client = require('../../models/Client');


// POST api/clients
// update and create contacts
// @access private
router.post('/', [ auth, [
  check('firstName', 'First name is required')
    .not()
    .isEmpty(),
  check('lastName', 'Last name is required')
    .not()
    .isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { firstName, lastName, phoneNumber, email, employee } = req.body;
  
  const clientFields = {}
  
  clientFields.user = req.user.id;
  
  if (firstName) clientFields.firstName = firstName;
  if (lastName) clientFields.lastName = lastName;
  if (phoneNumber) clientFields.phoneNumber = phoneNumber;
  if (email) clientFields.email = email;
  if (employee) clientFields.employee = employee;
  
  try {
    // Create
    client = new Client(clientFields);
    await client.save();
    res.json(client)
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})



router.get('/', auth, async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.id }).populate('client', ['firstName', 'lastName', 'phoneNumber', 'email', 'employee'])
    res.json(clients)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;
