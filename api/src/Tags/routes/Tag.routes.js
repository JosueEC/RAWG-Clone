//! Router module from Express
const { Router } = require('express')

//! Router instance
const router = Router()

//! HTTP requests
router.get('/', (req, res) => {
  res.status(200).send('router /tags')
})

module.exports = router
