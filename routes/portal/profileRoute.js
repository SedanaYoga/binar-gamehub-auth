const express = require('express')
const router = express.Router()
const {
  renderProfilePage,
} = require('../../controller/portal/profileController.js')

// --Profile-------------------------------------------------------------------
router.get('/users/:uuid', renderProfilePage)

module.exports = router
