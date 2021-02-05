const express = require('express');
const router = express.Router();
const appointmentsModel = require('./appointmentsModel');


router.get('/', async (req, res) => {
  try {
    // check if there is a query
    if (Object.keys(req.query).length !== 0) {
      const appointment = await appointmentsModel.findBy(req.query);
      return res.status(200).json(appointment);
    } else {
      const appointments = await appointmentsModel.findAll();
      return res.status(200).json(appointments);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const appointment = await appointmentsModel.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: 'the appointment with that id does not exist',
      });
    }

    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newAppointment = req.body;
  try {
    if (
      !newAppointment.date ||
      !newAppointment.time
    ) {
      return res.status(400).json({
        message: 'request body needs date, time',
      });
    }

      const addedAppointment = await appointmentsModel.create(newAppointment);
      res.status(201).json(addedAppointment[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const appointment = await appointmentsModel.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: 'the appointment with that id does not exist',
      });
    }

    await appointmentsModel.remove(req.params.id);
    return res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
