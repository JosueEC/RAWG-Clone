//! Models
const { videogame, childPlatform } = require('../../../database/database')

//! Service
const serviceGetVideogameByIDFromDatabase = async (idVideogame) => {
  const game = await videogame.findByPk(idVideogame, {
    include: {
      model: childPlatform,
      attributes: ['id', 'name', 'image_background'],
      through: {
        attributes: []
      }
    }
  })
  return game
}

module.exports = {
  serviceGetVideogameByIDFromDatabase
}
