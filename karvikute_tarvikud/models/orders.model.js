const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    OrderID: { type: String, unique: true, required: true, minlength: 3, maxlength: 31, match: [/^[a-zA-Z0-9-.]+$/, 'is invalid']  },
    password: { type: String, required: true },
    firstName: { type: String, required: true, minlength: 2, maxlength: 15 },
    lastName: { type: String, required: true, maxlength: 15 },
    createdDate: { type: Date, default: Date.now },
    accessType: {
      type: String,  
      enum : ['ADMIN','NOT_ADMIN'], 
      required: true
    },
    age: { type: Number }
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('users', schema)
