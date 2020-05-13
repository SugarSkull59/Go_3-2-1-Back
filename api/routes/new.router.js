const router = require('express').Router()

const {
  getAllNoticias,
} = require('../controllers/news.controller')

router.get('/', getAllNoticias)


module.exports = router