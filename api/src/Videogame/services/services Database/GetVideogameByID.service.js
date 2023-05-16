//! Models
const { videogame } = require('../../../database/database')

//! Service
const serviceGetVideogameByIDFromDatabase = async (idVideogame) => {
  const game = await videogame.findByPk(idVideogame)
  console.log('game service: ', game)
  return game
}

module.exports = {
  serviceGetVideogameByIDFromDatabase
}
