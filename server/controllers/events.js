const Events = require('../models/events');


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
    // const { title, date, venue } = req.body;
    const events = await Events.create(req.body);
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
    res.send(event);
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