const express = require('express');
const router = express.Router();
const petsModel = require('./petsModel');

// id in route is customer_id that is needed for getting all of the pets with the same id
router.get('/get-all-pets/:id', async (req, res) => {
  try {
    const pets = await petsModel.findAll(req.params.id);
    return res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    pets = await petsModel.findById(req.params.id);
    console.log(pets)

    if (!pets) {
      return res.status(404).json({
        message: 'the pet with that id does not exist',
      });
    }

    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err });
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

    const pet = await petsModel.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: 'the pet with that id does not exist',
      });
    }

    const updatedpet = await petsModel.update(
      req.params.id,
      req.body
    );

    return res.status(200).json(updatedpet[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newpet = req.body;

    if (
      !newpet.name ||
      !newpet.age ||
      !newpet.species ||
      !newpet.weight
    ) {
      return res.status(400).json({
        message: 'request body needs name, age, species, and weight.',
      });
    }
    else {
      const addedpet = await petsModel.create(newpet);
      res.status(201).json(addedpet[0]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pet = await petsModel.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: 'the pet with that id does not exist',
      });
    }

    await petsModel.remove(req.params.id);
    return res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
