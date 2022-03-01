const express = require('express')
const router = express.Router()
const {
  renderSignUpPage,
  signUpControl,
} = require('../../controller/portal/signUpController.js')

// --Sign Up-----------------------------------------------------------------
router.get('/signup', renderSignUpPage)
router.post('/register', signUpControl)

module.exports = router
