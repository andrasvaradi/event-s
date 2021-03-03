const express = require('express');
const cors = require('cors');
const router = require('./router');
const connection = require('./models');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    app.listen(config.port, () => {
      console.log(`
      .__________________________.
      | .___________________. |==|
      | |     I'm ALIVE     | |  |
      | |                   | |  |
      | |                   | |  |
      | |                   | |  |
      | |                   | |  |
      | |                   | |  |
      | |                   | | ,|
      | !___________________! |(c|
      !_______________________!__!
      |    ___ -=      ___ -= | ,|
      | ---[_]---   ---[_]--- |(c|

      ! http://${config.host}/${config.port} !__!

    `);
    });
  } catch (O_O) {
    console.log(O_O);
  }
})();

