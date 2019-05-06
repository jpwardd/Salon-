// const express = require('express');
// const router = express.Router();
// const auth = require('../../middleware/auth');
// const jwt = require('jsonwebtoken');
// const { check, validationResult } = require('express-validator/check');
// const config = require('config');

// const Service = require('../../models/Service');
// // POST api/ticket
// router.post('/', [ auth, [
//   check('name', 'Name is required')
//     .not()
//     .isEmpty(),
//   check('price', 'The Price is required')
//     .not()
//     .isEmpty()
// ]], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { name, email, password } = req.body;

//   try {

    
//   } catch(err) {
//     console.error(err.message);
//     res.status(500).send('Server error')
//   }
// })

// module.exports = router;