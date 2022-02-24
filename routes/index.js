const express = require('express')
const router = express.Router()
const apiRoute = require('./api/version/apiV1')
const portalRoute = require('./portal')
const { notFound, errorHandler } = require('../middleware/errorMiddleware.js')

router.use('/api/v1', apiRoute)
router.use(portalRoute)
router.use(notFound)
router.use(errorHandler)

module.exports = router
