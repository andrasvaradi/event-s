const mongoose = require('mongoose');
const { dbName, host, dbPort } = require('../config');

module.exports = mongoose.connect(`mongodb://${host}:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
