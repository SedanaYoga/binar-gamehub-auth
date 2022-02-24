const express = require('express')
const router = express.Router()
const {
  renderGamePage,
  addHistoryControl,
} = require('../../controller/portal/gameController.js')

// --Game---------------------------------------------------------------------
router.get('/game', renderGamePage)
router.post('/histories', addHistoryControl)

module.exports = router
