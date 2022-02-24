const express = require('express')
const router = express.Router()
const dashboardRoute = require('./dashboardRoute')
const gameRoute = require('./gameRoute')
const landingRoute = require('./landingPageRoute')
const logOutRoute = require('./logOutRoute')
const profileRoute = require('./profileRoute')
const signInRoute = require('./signInRoute')
const signUpRoute = require('./signUpRoute')

router.use(dashboardRoute)
router.use(gameRoute)
router.use(landingRoute)
router.use(logOutRoute)
router.use(profileRoute)
router.use(signInRoute)
router.use(signUpRoute)

module.exports = router
