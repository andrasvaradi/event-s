const { Schema, model} = require('mongoose');

const userSchema = new Schema ({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  host: {
    type: Boolean,
    required: true,
  },
  about: {
    type: String,
  },
  location: {
    type: String,
  },
  events: [{
    type: Schema.Types.ObjectId, ref: 'Event',
  }],
});

module.exports = model('Users', userSchema);
