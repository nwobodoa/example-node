
const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
  id: String,
  title: String,
  category: String,
  country: String,
  city: String,
  date: String,
  time: String,
  location: String,
  description: String,
  price: Number,
  rating: Number,
  image: String,
});

// Create the Event model based on the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
