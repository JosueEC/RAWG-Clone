const { Router } = require('express')
const GenreController = require('../controllers/Genre.controller')

const router = Router()

// TODO: Obtiene todos los genres desde la API externa de RAWG
router.get('/', GenreController.getGenres)

module.exports = router
