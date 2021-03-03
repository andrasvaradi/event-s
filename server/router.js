const router = require('express').Router();
const Events = require('./controllers/events');

router.get('/events', Events.getEvents);
router.get('/events/:id', Events.getSingleEvent);
router.post('/events', Events.postEvent);
router.delete('/events/:id', Events.deleteEvent);
router.put('/events/:id', Events.updateEvent);

module.exports = router;
