const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send('router /child-platform')
})

module.exports = router
