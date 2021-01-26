const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    userType: {
        type: String, 
        enum : ['ADMIN','NOT_ADMIN'], 
        required: true},
    firstName: { 
        type: String, 
        required: true, 
        minlength: 2, 
        maxlength: 15 },
    lastName: { 
        type: String, 
        required: true, 
        maxlength: 15 },
    email: { 
        type: String, 
        required: true  },
    address: { 
        type: String, 
        required: true, 
        street: String, 
        city: String, 
        state: String, 
        zip: Number },
    createdDate: { 
        type: Date, 
        default: Date.now },
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('users', usersSchema)