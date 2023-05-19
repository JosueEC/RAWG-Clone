//! Router module of Express
const { Router } = require('express')
const GenreController = require('../controllers/Genre.controller')

//! Router instance
const router = Router()

//! HTTP Requests

// Devuelve todos los genres que estan en la base de datos. En una primera instancia, cunado esta esta vacia, los obtiene de la API de RAWG, los almacena en la base de datos y los devuelve
router.get('/', GenreController.getGenres)

module.exports = router
