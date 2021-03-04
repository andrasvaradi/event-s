
const User = require('./../models/users');

const authMiddleware = async (req, res, next) => {

  try {
    const { uid } = req.session;
    console.log('USER ID:', uid);
    const user = await (await User.findOne({ _id: uid }));
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }

};

module.exports = authMiddleware;
