const router = require('express').Router()

const {
  getAllNoticias,
  getNoticia
} = require('../controllers/news.controller')

router.get('/', getAllNoticias)
router.get('/:id', getNoticia)



module.exports = router