const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/verifyToken');

const {
  getAllUsers,
  addUser,
  updateUser,
  getAllOrders,
  addOrder,
  updateOrder,
  getAllProducts,
  addProduct,
  updateProduct,
  getOneProductByID,
  deleteOneProductByID,
} = require('./controllers');
const { Users } = require('./db');

router.get('/users', getAllUsers);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);

router.get('/orders', getAllOrders);
router.post('/order', addOrder);
router.patch('/order/:id', updateOrder);

router.get('/products', getAllProducts);
router.post('/product', addProduct);
router.patch('/product/:id', updateProduct);

router.get('/product/:id', getOneProductByID);
router.delete('/product/:id', deleteOneProductByID);

router.post('/login', async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email not found!');

  const token = jwt.sign({ _id: user._id, email: user.email, userType: user.userType }, process.env.JWT_SECRET);
  res.header('jwt_token', token).send(token);
});

router.get('/dashboard', verifyToken, (req, res) => {
  let userData = req.user.userType;

  if (userData === 'ADMIN') {
    res.send("Welcome, ADMIN");
  } else {
    res.send('What are you doing here?');
  }
});
module.exports = router;
