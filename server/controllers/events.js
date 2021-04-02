const Events = require('../models/events');
const Users = require('../models/users');
const axios = require('axios');


exports.getEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200);
    res.send(events);
  } catch (err) {
    console.error('GET EVENTS: ', error);
    res.status(500);
    res.send(err);
  }
};
exports.getSingleEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.find({ _id: id });
    res.status(200);
    res.send(event);
  } catch (err) {
    console.error('SINGLE EVENT: ', error);
    res.status(500);
    res.send(err);
  }
};
exports.postEvent = async (req, res) => {
  try {
    const { _id } = req.user;
    let { location } = req.body;
    const getGeoLocation = await axios.get(`http://api.postcodes.io/postcodes/${location}`);
    geolocation = `${getGeoLocation.data.result.longitude},${getGeoLocation.data.result.latitude}`;
    const newEvent = { ...req.body, geolocation, owner: _id };
    const events = await Events.create(newEvent);
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: events._id } }, { new: true });
    res.status(201);
    res.send(events);
  } catch (err) {
    console.error('POST EVENT: ', err);
    res.status(400);
    res.send(err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.findOne({ _id: id });
    await Promise.all(event.list.map(async (el, i) => {
      await Users.findByIdAndUpdate(event.list[i], { $pull: { eventList: event._id } }, { new: true });
    }));
    const deleteFromHost = await Users.findByIdAndUpdate(event.owner, { $pull: { eventList: event._id } }, { new: true });
    const deleteEvent = await Events.deleteOne({ _id: id });
    res.status(204);
    res.send({ msg: `Deleted event ${id}` });
  } catch (error) {
    console.error('DELETE EVENT: ', error);
    res.status(500);
    res.send(error);
  }
};

exports.updateEvent = async (req, res) => {

  try {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.send(event);
  } catch (error) {
    console.error('UPDATE EVENT: ', error);
    res.status(500);
    res.send(error);
  }
};


exports.attendEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const addToEvent = await Events.findByIdAndUpdate(id, { $push: { list: _id }, $inc: { attendees: 1 } }, { new: true });
    const addToUser = await Users.findByIdAndUpdate(_id, { $push: { eventList: id } }, { new: true });
    res.status(201);
    res.send(addToEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
exports.unattendEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const deleteFromEvent = await Events.findByIdAndUpdate(id, { $pull: { list: _id }, $inc: { attendees: -1 } }, { new: true });
    const deleteFromUser = await Users.findByIdAndUpdate(_id, { $pull: { eventList: id } }, { new: true });
    res.status(201);
    res.send(deleteFromEvent);
  } catch (error) {
    res.status(404).send({ error, message: 'Could not assign user to event' });
  }
};
