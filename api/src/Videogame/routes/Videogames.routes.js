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

// TODO: Crea un nuevo videojuego en nuestra base de datos con la informacion recibida por query
router.post('/', (req, res) => {
  res.status(200).send('post -> videogame')
})

// TODO: Actualiza los datos de un videogame existente en nuestra base de datos a traves de un ID recibido en el body, asi como los datos a modificar
router.put('/', (req, res) => {
  res.status(200).send('put -> videogame')
})
