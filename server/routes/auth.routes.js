const { Router } = require('express')
// const passport = require('passport')
const router = Router()
const { login, registration } = require('../resolvers/auth.resolvers')

router.post('/login', login)
router.post('/registration', registration)
// router.post(
//   '/secure',
//   passport.authenticate('jwt', { session: false }),
//   secure
// )

module.exports = router
