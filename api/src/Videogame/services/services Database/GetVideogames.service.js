//! Models
const { videogame, childPlatform, genre, tag } = require('../../../database/database')

//! Formatters
const { formatArrayOfVideogames } = require('../services Database/formatters/formatArrayOfVideogames')

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
  const newFormatVideogames = formatArrayOfVideogames(videogames)
  return newFormatVideogames
}

module.exports = {
  serviceGetVideogamesFromDatabase
}
