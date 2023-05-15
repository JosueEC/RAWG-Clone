//! Router Module of Express
const { Router } = require('express')

//! Controller Module
const ChildPlatformController = require('../controllers/ChildPlatform.controller')

//! Router instance
const router = Router()

//! HTTP Requests
router.get('/', ChildPlatformController.getChildPlatforms)

module.exports = router
