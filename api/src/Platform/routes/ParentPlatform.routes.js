//! Router Module of Express
const { Router } = require('express')

//! Controller module
const ParentPlatformController = require('../controllers/ParentPlatform.controller')

//! Router instance
const router = Router()

//! HTTP Requests

// Devuelve todas las parent platforms que estan en la base de datos. En una primera instancia, cuando esta esta vacia, las obtiene de la API de RAWG, las almacena y las devuelve
router.get('/', ParentPlatformController.getParentPlatforms)

module.exports = router
