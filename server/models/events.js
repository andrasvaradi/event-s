const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  name: {
    type: String, required: true,
  },
  date: {
    type: Date, default: Date.now,
  },
  location: {
    type: String, required: true,
  },
  limit: {
    type: Number, default: 0,
  },
  duration: {
    type: Number, default: 1,
  },
  attendees: {
    type: Number, default: 0,
  },
  photo: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = model('Events', eventSchema);
