const express = require('express');
const router = express.Router();

const { verifyToken, verifyRole } = require('./middleware');

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
  userLogin,
} = require('./controllers');

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

router.post('/login', userLogin);

router.get('/dashboard', verifyToken, verifyRole);
module.exports = router;
