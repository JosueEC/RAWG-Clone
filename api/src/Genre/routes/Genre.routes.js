const { Router } = require('express')

const router = Router()

// TODO: Obtiene todos los genres a traves de dos endpoint. El primero obtiene los genres en general y el segundo obtiene informacion detallada de cada genre
router.get('/', (req, res) => {
  res.status(200).send('get -> genres')
})

module.exports = router
