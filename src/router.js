const express = require('express')
const router = express.Router()

const { getAllUsers, addUser, updateUser, getAllOrders, addOrder, updateOrder, addProduct, getAllProducts } = require('./controllers')

router.get('/users', getAllUsers)
router.post('/user', addUser)
router.patch('/user/:id', updateUser)


router.get('/orders', getAllOrders)
router.post('/order', addOrder)
router.patch('/order/:id', updateOrder)


router.post('/product', addProduct)
router.get('/products', getAllProducts)



module.exports = router
