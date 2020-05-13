const bcrypt = require('bcrypt')
const seeder = require('mongoose-seed')

require('dotenv').config()

const UsersModel = require('./api/models/user.model')
const BoxModel = require('./api/models/box.model')
const NewModel = require('./api/models/new.model')


const BOXES = require('./boxes.json')
const NEWS = require('./news.json')


const ADMIN = {
  "first_name": "Begoña",
  "last_name": "Herrero",
  "email": "bego@321go.com",
  "password": bcrypt.hashSync('11111111', 10),
  "role": "ADMIN"
}


const USER = [
  {
    "first_name": "Adrian",
    "last_name": "Velázquez",
    "email": "adri@321go.com",
    "password": bcrypt.hashSync('11111111', 10),
    "role": "USER"
  },
  {
    "first_name": "Néstor",
    "last_name": "Velázquez",
    "email": "nestor@321go.com",
    "password": bcrypt.hashSync('11111111', 10),
    "role": "USER"
  }
]


seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['./api/models/user.model.js', './api/models/box.model.js', './api/models/new.model.js'])

  seeder.clearModels(['box', 'user', 'news'], async function () {

    const admin = UsersModel.create(ADMIN)
    const user = UsersModel.create(USER)

    for (i = 0; i < BOXES[0].documents.length; i++) {
      const box = BOXES[0].documents[i]
      await BoxModel.create(box)
    }
    for (i = 0; i < NEWS[0].documents.length; i++) {
      const noticia = NEWS[0].documents[i]
      await NewModel.create(noticia)
    }
    seeder.disconnect()
  })
})
