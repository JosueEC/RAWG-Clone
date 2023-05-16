//! Models
const { videogame } = require('../../../database/database')

//! Service
const serviceGetVideogameByIDFromDatabase = async (idVideogame) => {
  const game = await videogame.findById(idVideogame)
  return game
}

module.exports = {
  serviceGetVideogameByIDFromDatabase
}
