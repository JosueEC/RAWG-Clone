const { Router } = require('express')

const ChildPlatformController = require('../controllers/ChildPlatform.controller')

const router = Router()

router.get('/', ChildPlatformController.getChildPlatforms)

module.exports = router
