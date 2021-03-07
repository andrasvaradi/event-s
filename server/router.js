const router = require('express').Router();
const Events = require('./controllers/events');
const Users = require('./controllers/users');
const authMiddleware = require('./middlewares/auth');

router.get('/events', Events.getEvents);
router.get('/events/:id', Events.getSingleEvent);
router.post('/events', authMiddleware, Events.postEvent);
router.delete('/events/:id', Events.deleteEvent);
router.put('/events/:id', Events.updateEvent);
router.post('/events/:id/up', authMiddleware, Events.attendEvent);
router.post('/events/:id/down', authMiddleware, Events.unattendEvent);


router.post('/register', Users.create);
router.post('/login', Users.login);
router.get('/me', authMiddleware, Users.profile);
router.post('/logout', authMiddleware, Users.logout);

router.get('/postcode/:postcode', Events.test);


//DEV
router.get('/users', Users.getUsers);
router.delete('/users/:id', Users.deleteUser);


module.exports = router;
