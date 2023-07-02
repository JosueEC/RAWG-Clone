//! Router module of Express
const { Router } = require('express')
const GenreController = require('../controllers/Genre.controller')

//! Router instance
const router = Router()

//! HTTP Requests
router.get('/', GenreController.getGenres)

module.exports = router
