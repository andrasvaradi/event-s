const router = require('express').Router();
const Events = require('./controllers/events');
const Users = require('./controllers/users');

router.get('/events', Events.getEvents);
router.get('/events/:id', Events.getSingleEvent);
router.post('/events', Events.postEvent);
router.delete('/events/:id', Events.deleteEvent);
router.put('/events/:id', Events.updateEvent);


// router.post('/register', Users.create);
// router.post('/login', Users.login);
// router.get('/me', authMiddleware, Users.profile);
// router.post('/logout', authMiddleware, Users.logout);


module.exports = router;
