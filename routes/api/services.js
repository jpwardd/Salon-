const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const config = require('config');

const Service = require('../../models/Service');

// POST api/services
// update and create services
// @access private
router.post('/', [ auth, [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('price', 'Price is required')
    .not()
    .isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, price, category } = req.body;
  
  const serviceFields = {}
  
  serviceFields.user = req.user.id;

  if (name) serviceFields.name = name;
  if (price) serviceFields.price = price;
  if (category) serviceFields.category = category;

  try {
    // Create
    service = new Service(serviceFields);
    await service.save();
    res.json(service)
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// GET api/services 
// description: get all of the services
// @access private

router.get('/', auth, async (req, res) => {
  try {
    const services = await Service.find({ user: req.user.id}).populate('service', ['name', 'price'])
    res.json(services)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

// GET api/services/user/:user_id
// description: get service by user ID
// @access private

router.get('/:id', auth, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    
    if (!service) {
      return res.status(400).json({ msg: 'Service not found'})
    }

    if (service.user.toString() !== req.user.id) {
     return res.status(401).json({ msg: 'User not authorized' })

   }

    res.json(service)

  } catch (err) {
    if(err.kind == 'ObjectId') {
       return res.status(404).json({ msg: 'Service not found'})
    }
    console.error(err.message);

    res.status(500).send('Server error')
  }
});


// DELETE api/services 
// description: delete user, services & tickets 
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
   const service = Service.find(req.params.id);

    if(!service) {
       return res.status(404).json({ msg: 'Service not found'})
    }

   if (service.user.toString() !== req.user.id) {
     return res.status(401).json({ msg: 'User not authorized' })

   }

   await post.remove();
   res.json({ msg: 'Service removed' })
  } catch (err) {
    console.error(err.message);
     if(err.kind == 'ObjectId') {
       return res.status(404).json({ msg: 'Service not found'})
    }
    res.status(500).send('Server error')
  }
});


module.exports = router;