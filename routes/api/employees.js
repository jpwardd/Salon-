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
    check('color', 'Colors are required')
    .not()
    .isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, color, password } = req.body;

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
      color,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    employee.password = await bcrypt.hash(password, salt);
    
    const user = await User.findById(req.user.id)

    employee.owner = user

    await employee.save();

    user.employees.push(employee)

    await user.save()

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
        res.json({employee, token})
      });

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employee.find({ user: req.user._id}).populate('employee', ['name'])
    res.json(employees)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;