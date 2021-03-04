const { Users } = require('../db');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email not found!');

  const token = jwt.sign({ _id: user._id, email: user.email, userType: user.userType }, process.env.JWT_SECRET);
  res.header('jwt_token', token).send(token);
};
module.exports = userLogin;
