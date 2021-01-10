const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    //UserID: { type: String, unique: true, required: true, minlength: 1, maxlength: 10, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid'] },
    UserType: {type: String, enum : ['ADMIN','NOT_ADMIN'], required: true},
    FirstName: { type: String, required: true, minlength: 2, maxlength: 15 },
    LastName: { type: String, required: true, maxlength: 15 },
    Email: { type: String, required: true  },
    Address: { type: String, required: true, street: String, city: String, state: String, zip: Number },
    CreatedDate: { type: Date, default: Date.now },
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('users', schema)