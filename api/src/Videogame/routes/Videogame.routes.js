//! Express Router
const { Router } = require('express')

//! Controller Module
const VideogameController = require('../controllers/Videogame.controller')

//! Router Instance
const router = Router()

//! HTTP Requests
// Por defecto obtiene 100 videojuegos de la API externa y 50 de la base de datos
// En caso de que llegue una query en la request, obtiene 100 videojuegos de la API externa y 50 videojuegos de la base de datos, los cuales, coincidan con la query por nombre
router.get('/', VideogameController.getVideogames)

// Obtiene la informacion detallada de un videojuego en base a un ID recibido por params
router.get('/:idVideogame', VideogameController.getVideogameByID)

// TODO: Crea un nuevo videojuego en nuestra base de datos con la informacion recibida por query
router.post('/', VideogameController.postVideogame)

// TODO: Actualiza los datos de un videogame existente en nuestra base de datos a traves de un ID recibido en el body, asi como los datos a modificar
router.put('/', (req, res) => {
  res.status(200).send('put -> videogame')
})

// TODO: Elimina un videogame de la base de datos en base a un ID recibido por params
router.delete('/:idVideogame', (req, res) => {
  res.status(200).send('delete -> videogame')
})

module.exports = router
