//! Models
const { videogame, childPlatform, genre, tag } = require('../../../database/database')

//! Service
const serviceGetVideogamesFromDatabase = async () => {
  const videogames = await videogame.findAll({
    include: [
      {
        model: childPlatform,
        attributes: ['name', 'slug'],
        through: { attributes: [] }
      },
      {
        model: genre,
        attributes: ['slug'],
        through: { attributes: [] }
      },
      {
        model: tag,
        attributes: ['slug'],
        through: { attributes: [] }
      }
    ]
  })
  return videogames
}

module.exports = {
  serviceGetVideogamesFromDatabase
}
