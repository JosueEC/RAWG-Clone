//! Router Module of Express
const { Router } = require('express')

//! Controller Module
const ChildPlatformController = require('../controllers/ChildPlatform.controller')

//! Router instance
const router = Router()

//! HTTP Requests

// Obtiene todas las child platforms desde la base de datos. En una primera instancia cuando esta esta vacia, las obtiene desde la API de RAGW, las almacena en la base de datos y las devuelve
router.get('/', ChildPlatformController.getChildPlatforms)

module.exports = router
