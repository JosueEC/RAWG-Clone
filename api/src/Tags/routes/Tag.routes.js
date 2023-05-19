//! Router module from Express
const { Router } = require('express')

//! Controller module
const TagController = require('../controllers/Tag.controller')

//! Router instance
const router = Router()

//! HTTP requests

// Devuelve las tags almacenadas en la base de datos, en caso de que esta este vacia, entonces las obtiene de la API de RAWG, las almacena en la base de datos y las devuelve, esto solo ocurre en una primer instancia
router.get('/', TagController.getTags)

module.exports = router
