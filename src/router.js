const express = require('express');
const router = express.Router();

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

module.exports = router;
