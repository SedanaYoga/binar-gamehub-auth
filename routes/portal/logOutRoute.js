const express = require('express')
const router = express.Router()
const { logOutControl } = require('../../controller/portal/logOutController.js')

// --Log Out-------------------------------------------------------------------
router.get('/logout', logOutControl)

module.exports = router
