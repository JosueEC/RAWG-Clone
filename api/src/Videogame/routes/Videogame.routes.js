const { Router } = require('express')

const VideogameController = require('../controllers/Videogame.controller')

const router = Router()

// TODO: Por defecto obtiene 100 videojuegos de la API externa y 50 de la base de datos

// TODO: En caso de que llegue una query en la request, obtiene 100 videojuegos de la API externa y 50 videojuegos de la base de datos, loc cuales, coincidan con la query por nombre
router.get('/', VideogameController.getVideogames)

// TODO: Obtiene la informacion detallada de un videojuego en base a un ID recibido por params
router.get('/:idVideogame', VideogameController.getVideogameByID)

// TODO: Crea un nuevo videojuego en nuestra base de datos con la informacion recibida por query
router.post('/', (req, res) => {
  res.status(200).send('post -> videogame')
})

// TODO: Actualiza los datos de un videogame existente en nuestra base de datos a traves de un ID recibido en el body, asi como los datos a modificar
router.put('/', (req, res) => {
  res.status(200).send('put -> videogame')
})

// TODO: Elimina un videogame de la base de datos en base a un ID recibido por params
router.delete('/:idVideogame', (req, res) => {
  res.status(200).send('delete -> videogame')
})

module.exports = router
