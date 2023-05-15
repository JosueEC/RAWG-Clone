//! Router module of Express
const { Router } = require('express')
const GenreController = require('../controllers/Genre.controller')

//! Router instance
const router = Router()

//! HTTP Requests
// TODO: Obtiene todos los genres desde la API externa de RAWG
router.get('/', GenreController.getGenres)

module.exports = router
