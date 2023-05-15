const { Router } = require('express')

const ParentPlatformController = require('../controllers/ParentPlatform.controller')

const router = Router()

router.get('/', ParentPlatformController.getParentPlatforms)

module.exports = router
