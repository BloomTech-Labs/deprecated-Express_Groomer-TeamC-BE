const express = require('express');
const router = express.Router();
const customersModel = require('./customersModel');

router.get('/', async (req, res) => {
  try {
    const customers = await customersModel.findAll();
    return res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customer = await customersModel.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: 'the customer with that id does not exist',
      });
    }

    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put('/:id/removeFav', async (req, res) => {
  try {
    // check if the request body is emtpy
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'request body is required',
      });
    }
    const customer = await customersModel.findById(req.params.id);
    if(req.body.favorite_groomers){
      const oldFav = customer.favorite_groomers;
      const index = oldFav.indexOf(req.body.favorite_groomers);
      if(index > -1){
        oldFav.splice(index, 1);
        const newFav = oldFav;
        let newBody = req.body;
        newBody.favorite_groomers = newFav;
        const updatedCustomer = await customersModel.update(
        req.params.id,
        newBody
        );
        return res.status(200).json(updatedCustomer);
      }  
    }
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    // check if the request body is emtpy
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'request body is required',
      });
    }

    const customer = await customersModel.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: 'the customer with that id does not exist',
      });
    }
    if(req.body.favorite_groomers){
      const oldFav = customer.favorite_groomers;
      const newFav = [...oldFav, req.body.favorite_groomers];
      let newBody = req.body;
      newBody.favorite_groomers = newFav;
      const updatedCustomer = await customersModel.update(
        req.params.id,
        newBody
      );
      return res.status(200).json(updatedCustomer);
    }
    else{
      const updatedCustomer = await customersModel.update(
        req.params.id,
        req.body
      );
      return res.status(200).json(updatedCustomer[0]);
    }
    
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCustomer = req.body;

    if (
      !newCustomer.name ||
      !newCustomer.lastname ||
      !newCustomer.address ||
      !newCustomer.phone ||
      !newCustomer.email
    ) {
      return res.status(400).json({
        message: 'request body needs name, lastname, address, phone, and email',
      });
    }

    const customerPhoneExists = await customersModel.findBy({
      phone: newCustomer.phone,
    });

    if (customerPhoneExists && customerPhoneExists.length !== 0) {
      return res.status(400).json({
        message: 'a user with this phone number already exists',
      });
    }

    const customerEmailExists = await customersModel.findBy({
      email: newCustomer.email,
    });

    if (customerEmailExists && customerEmailExists.length !== 0) {
      return res.status(400).json({
        message: 'a user with this email address already exists',
      });
    } else {
      const addedCustomer = await customersModel.create(newCustomer);
      res.status(201).json(addedCustomer[0]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const customer = await customersModel.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: 'the customer with that id does not exist',
      });
    }

    await customersModel.remove(req.params.id);
    return res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
