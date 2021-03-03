const mongoose = require('mongoose');
const { dbName, host, dbPort } = require('../config');

module.exports = mongoose.connect(`mongodb://${host}:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
},

(err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
    console.log(`🦆 Database (sessions) connected @ port ${dbPort}!`); // eslint-disable-line no-console
  }
});
