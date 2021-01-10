const express = require('express')
const router = express.Router()

const { getAllUsers, addUser, updateUser, getAllOrders, addOrder, updateOrder } = require('./controllers')

router.get('/users', getAllUsers)

router.post('/user', addUser)

router.patch('/user/:id', updateUser)

router.get('/orders', getAllOrders)

router.post('/order', addOrder)

router.patch('/order/:id', updateOrder)




module.exports = router
