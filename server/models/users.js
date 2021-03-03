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
  },
  lastName: {
    type: String,
  },
  host: {
    type: Boolean,
    required: true,
  },
  photos: {
    type: String,
  },
  about: {
    type: String,
  },
  location: {
    type: String,
  },
  events: [{
    type: Schema.Types.ObjectId, ref: 'Events',
  }],
});

module.exports = model('User', userSchema);
