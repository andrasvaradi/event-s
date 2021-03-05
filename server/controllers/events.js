const Events = require('../models/events');
const Users = require('../models/users');


exports.getEvents = async (req,res) => {
  try {
    const events = await Events.find();
    res.status(200);
    res.send(events);
  } catch (O_O) {
    console.error('GET EVENTS: ',error);
    res.status(500);
    res.send(O_O);
  }
};
exports.getSingleEvent = async (req,res) => {
  try {
    const { id } = req.params;
    const event = await Events.find({_id: id});
    res.status(200);
    res.send(event);
  } catch (O_O) {
    console.error('SINGLE EVENT: ',error);
    res.status(500);
    res.send(O_O);
  }
};
exports.postEvent = async (req,res) => {
  try {
    // if (!req.user.host) throw Error;
    const { _id } = req.user;
    const newEvent = {...req.body, owner: _id};
    const events = await Events.create(newEvent);
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: events._id}},{new:true});
    // console.log(addToUser);
    res.status(201);
    res.send(events);
  } catch (O_O) {
    console.error('POST EVENT: ',error);
    res.status(400);
    res.send(O_O);
  }
};

exports.deleteEvent = async (req,res) => {
  try {
    const { id } = req.params;
    const event = await Events.deleteOne({ _id: id});
    res.status(204);
    res.send({msg: `Deleted event ${id}`});
  } catch (error) {
    console.error('DELETE EVENT: ',error);
    res.status(500);
    res.send(error);
  }
};

exports.updateEvent = async (req,res) => {
  
  try {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(
      id,
      req.body,
      { new: true}
    );
    res.send(event);
  } catch (error) {
    console.error('UPDATE EVENT: ',error);
    res.status(500);
    res.send(error);
  }
};


exports.attendEvent = async (req,res) => {
  try {
    const { _id } = req.user;
    console.log('LOGGING THIS', _id );
    const { id } = req.params;
    const addToEvent = await Users.findByIdAndUpdate(id, { $push: { listist: _id}},{new:true});
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: id}},{new:true});
    res.status(201);
    res.send(addToEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
