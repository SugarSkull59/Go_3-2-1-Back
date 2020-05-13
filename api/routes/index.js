const router = require('express').Router()
const {
  authUser
} = require('../utils/index')

const authRouter = require('./auth.router')
const usersRouter = require('./user.router')
const boxRouter = require('./box.router')
const newRouter = require('./new.router')


router.use('/auth', authRouter)
router.use('/me', authUser, usersRouter)
router.use('/boxes', boxRouter)
router.use('/news', newRouter)


// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router