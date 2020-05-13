const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
const newModel = mongoose.model('news', newSchema)
module.exports = newModel
