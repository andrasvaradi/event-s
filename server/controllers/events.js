const Events = require('../models/events');
const Users = require('../models/users');
const axios = require('axios');


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
    // let { name, limit, location, type, description, dat, duration, photo } = req.body;
    let { location } = req.body;
    console.log(location);
    const getGeoLocation = await axios.get(`http://api.postcodes.io/postcodes/${location}`);
    console.log(getGeoLocation);
    geolocation = `${getGeoLocation.data.result.longitude},${getGeoLocation.data.result.latitude}`;
    const newEvent = {...req.body, geolocation, owner: _id};
    // const newEvent = {name, limit, type, description, dat, duration, photo, location, geolocation, owner: _id};
    const events = await Events.create(newEvent);
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: events._id}},{new:true});
    console.log(events);
    res.status(201);
    res.send(events);
  } catch (O_O) {
    console.error('POST EVENT: ',O_O);
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
    const { id } = req.params;
    const { _id } = req.user;
    const addToEvent = await Events.findByIdAndUpdate(id, { $push: { list: _id}, $inc: { attendees: 1 }},{new:true});
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: id}},{new:true});
    res.status(201);
    res.send(addToEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
exports.unattendEvent = async (req,res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const deleteFromEvent = await Events.findByIdAndUpdate(id, { $pull: { list: _id}, $inc: { attendees: -1}},{new:true});
    const deleteFromUser = await Users.findByIdAndUpdate(_id, { $pull: { eventList: id}},{new:true});
    res.status(201);
    res.send(deleteFromEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
