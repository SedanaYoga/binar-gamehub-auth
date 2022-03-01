const express = require('express')
const router = express.Router()
const { restrict } = require('../../middleware/sessionMiddleware')

const {
  renderHomePage,
} = require('../../controller/portal/landingPageController.js')

// -- Landing Page
router.get('/', restrict, renderHomePage)

module.exports = router
