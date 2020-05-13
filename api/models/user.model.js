const mongoose = require('mongoose')
const boxSchema = require('./box.model')



const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Name is required']
  },
  last_name: {
    type: String,
    required: [false, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: false
  },
  social_fb: {
    type: String,
    required: false
  },
  social_it: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  },
  name_box: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'box',
    required: false
  },
  country: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    required: true,
    default: 'USER'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel