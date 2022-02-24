const express = require('express')
const router = express.Router()
const {
  getAllUsersControl,
  renderDashboardPage,
  renderUpdateUser,
  updateUserControl,
  deleteUserControl,
} = require('../../controller/portal/dashboardController.js')

// --Dashboard-----------------------------------------------------------------
router.get('/users', getAllUsersControl)
router.get('/dashboard', renderDashboardPage)
router.get('/users/:uuid/update', renderUpdateUser)
router.post('/users/:uuid/update', updateUserControl)
router.get('/users/:uuid/delete', deleteUserControl)

module.exports = router
