const express = require('express')
const router = express.Router()
const { restrict } = require('../../middleware/sessionMiddleware')

const {
  renderSignInPage,
  authLoginControl,
  whoami,
} = require('../../controller/portal/signInController.js')

// --Sign In----------------------------------------------------------------
router.get('/signin', renderSignInPage)
router.post('/signin', authLoginControl)
router.get('/whoami', restrict, whoami)

module.exports = router
