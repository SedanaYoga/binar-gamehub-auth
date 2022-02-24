const express = require('express')
const router = express.Router()

const {
  renderSignInPage,
  signInControl,
} = require('../../controller/portal/signInController.js')

// --Sign In----------------------------------------------------------------
router.get('/signin', renderSignInPage)
router.post('/signin', signInControl)

module.exports = router
