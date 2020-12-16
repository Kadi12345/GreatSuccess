const express = require('express')
const router = express.Router()

const { getAllUsers, addUser, updateUser } = require('./controllers')

router.get('/users', getAllUsers)

router.post('/user', addUser)

router.patch('/user/:id', updateUser)

module.exports = router
