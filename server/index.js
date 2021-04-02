const express = require('express');
const cors = require('cors');
const router = require('./router');
const connection = require('./models');
const session = require('express-session');
const config = require('./config');

const app = express();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'testsecret',
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found 😞');
});

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
  } catch (err) {
    console.log(err);
  }
})();
