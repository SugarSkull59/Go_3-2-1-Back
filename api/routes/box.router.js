const router = require('express').Router()

const {
  getAllBoxes,
  getBox
} = require('../controllers/box.controller')

router.get('/', getAllBoxes)
router.get('/:id', getBox)

module.exports = router