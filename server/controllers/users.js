const bcrypt = require('bcrypt');
const User = require('../models/users');

const create = async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }

};

const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }

};

const profile = async (req, res) => {

  try {
    const populatedUser = await (await User.findOne({ _id: req.user._id}).populate('eventList'));
    console.log(populatedUser);
    const { _id, firstName, lastName, host, photos, about, location, eventList } = populatedUser;
    const user = { _id, firstName, lastName, host, photos, about, location, eventList };
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error, message: 'User not found' });
  }
};

const logout = (req, res) => {

  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
};
const getUsers = async (req,res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.send(users);
  } catch (O_O) {
    console.error('GET USERS: ',error);
    res.status(500);
    res.send(O_O);
  }
};
const deleteUser = async (req,res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id});
    res.status(204);
    res.send({msg: `Deleted user ${id}`});
  } catch (error) {
    console.error('DELETE USER: ',error);
    res.status(500);
    res.send(error);
  }
};


module.exports = { create, login, profile, logout, getUsers, deleteUser };
