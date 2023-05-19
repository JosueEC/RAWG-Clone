//! Models
const { videogame, childPlatform, genre, tag } = require('../../../database/database')
const { Op } = require('sequelize')

//! Formatters
const { formatArrayOfVideogames } = require('./formatters/formatArrayOfVideogames')

//! Service
const serviceGetVideogamesByQueryFromDatabase = async (queryName) => {
  const queryNameLowerCase = queryName.toLowerCase()
  const videogames = await videogame.findAll({
    where: {
      slug: {
        [Op.like]: `%${queryNameLowerCase}%`
      }
    },
    attributes: ['id', 'name', 'slug', 'released', 'background_image', 'rating', 'rating_top', 'movies_count'],
    include: [
      {
        model: childPlatform,
        attributes: ['slug'],
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
  serviceGetVideogamesByQueryFromDatabase
}
