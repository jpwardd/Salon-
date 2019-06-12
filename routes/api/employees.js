const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const config = require('config');
const auth = require('../../middleware/auth');

const Employee = require('../../models/Employee');
const User = require('../../models/User')
// POST api/employees
router.post('/', [ auth, [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;

  try {
    let employee = await Employee.findOne({ email });
    if (employee) {
      return res
      .status(400)
      .json({ errors: [{ msg: 'Employee already exists' }]})
    }

    let owner = req.user.id;
    let isEmployee = true
    employee = new Employee({
      owner,
      name,
      email,
      password,
      isEmployee
    });

    const salt = await bcrypt.genSalt(10);

    employee.password = await bcrypt.hash(password, salt);
    
    await employee.save();

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

// router.get('/', auth, async (req, res) => {
//   try {
//     const employees = await User.find({ employee: req.user.id}).populate('user', ['name'])
//     res.json(services)
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error')
//   }
// });

module.exports = router;