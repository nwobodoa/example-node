const express = require('express');
const router = express.Router();
const Event = require('../models/EventModel');

router.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.log('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/api/events/:id', async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      res.json(event);
    }
  } catch (error) {
    console.log('Error fetching event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
