//! Models
const { videogame } = require('../../../database/database')

//! Service
const serviceGetVideogamesFromDatabase = async () => {
  const videogames = await videogame.findAll()
  return videogames
}

module.exports = {
  serviceGetVideogamesFromDatabase
}
