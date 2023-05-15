//! Router Module of Express
const { Router } = require('express')

//! Controller module
const ParentPlatformController = require('../controllers/ParentPlatform.controller')

//! Router instance
const router = Router()

//! HTTP Requests
router.get('/', ParentPlatformController.getParentPlatforms)

module.exports = router
