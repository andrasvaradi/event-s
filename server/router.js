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

//DEV
router.get('/users', Users.getUsers);
router.get('/users/:id', Users.getHostDetails);
router.delete('/users/:id', Users.deleteUser);




// // Photo test

// const fileUploader = require('./cloudinary.config');
// const UploadedFile = require('./models/uploadedFile.model');

// router.post('/upload', fileUploader.single('file'), (req, res, next) => {

//   if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }
//   const newImage  = new UploadedFile({title: req.file.filename, fileUrl: req.file.path});
//   newImage.save((err) => {
//     if (err) {

//       return res.status(500);
//     }
//     res.json({ secure_url: req.file.path });
//   });
//   res.send(newImage);
// });















module.exports = router;
