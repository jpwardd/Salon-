const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Employee = require('../../models/Employee')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator/check');
const config = require('config');


router.get('/', auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.employee._id).select('-password')
    res.json(employee);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});


router.post('/', [
  check('email', 'Email is required').exists(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  try {
    let employee = await Employee.findOne({ email });
    if (!employee) {
      return res
      .status(400)
      .json({ errors: [{ msg: 'Invalid Credentials' }]})
    }

    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
       return res
      .status(400)
      .json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      employee: {
        id: employee.id
      }
    }

    jwt.sign(
      payload, 
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if(err) throw err;
        res.json({ token });
      });

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})


module.exports = router