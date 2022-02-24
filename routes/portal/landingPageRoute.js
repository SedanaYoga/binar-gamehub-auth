const express = require('express')
const router = express.Router()

const {
  renderHomePage,
} = require('../../controller/portal/landingPageController.js')

// -- Landing Page
router.get('/', renderHomePage)

module.exports = router
