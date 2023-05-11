const express = require('express')
const morgan = require('morgan')

const { SERVER_CONST } = require('../consts')

const VideogameRoutes = require('./Videogame/routes/Videogame.routes')
const GenreRoutes = require('./Genre/routes/Genre.routes')

const server = express()

server.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', `${SERVER_CONST.CORS_DOMAIN}:${SERVER_CONST.CORS_PORT}`)
  res.header('Acces-Control-Allow-Credentials', 'true')
  res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Acces-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

server.use(express.json())
server.use(morgan('dev'))

server.use('/videogames', VideogameRoutes)

server.use('/genres', GenreRoutes)

server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.log(err)
  res.status(status).send(message)
})

module.exports = server
