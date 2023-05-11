const { Router } = require('express')

const router = Router()

// TODO: Por defecto obtiene 100 videojuegos de la API externa y 50 de la base de datos

// TODO: En caso de que llegue una query en la request, obtiene 100 videojuegos de la API externa y 50 videojuegos de la base de datos, loc cuales, coincidan con la query por nombre
router.get('/', (req, res) => {
  res.status(200).send('get -> videogames')
})

// TODO: Obtiene la informacion detallada de un videojuego en base a un ID recibido por params
router.get('/:idVideogame', (req, res) => {
  res.status(200).send('get -> info videogame por id')
})
