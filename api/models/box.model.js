const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  social_fb: {
    type: String,
    required: true
  },
  social_it: {
    type: String,
    required: true
  },
  social_web: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  coachs: {
    type: [String],
    required: false
  },
  google_map_embed_iframe: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
  /*  geo: {
     type: [Number],
     index: '2dsphere',
     required: false
   } */
})
const boxModel = mongoose.model('box', boxSchema)
module.exports = boxModel
