const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    //userID: { type: String, unique: true, required: true, minlength: 1, maxlength: 10, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid'] },
    userType: {type: String, enum : ['ADMIN','NOT_ADMIN'], required: true},
    firstName: { type: String, required: true, minlength: 2, maxlength: 15 },
    lastName: { type: String, required: true, maxlength: 15 },
    email: { type: String, required: true  },
    address: { type: String, required: true, street: String, city: String, state: String, zip: Number },
    createdDate: { type: Date, default: Date.now },
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('users', schema)