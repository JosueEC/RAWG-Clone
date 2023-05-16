//! Router module from Express
const { Router } = require('express')

//! Controller module
const TagController = require('../controllers/Tag.controller')

//! Router instance
const router = Router()

//! HTTP requests
router.get('/', TagController.getTags)

module.exports = router
