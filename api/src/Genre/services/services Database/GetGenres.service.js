//! Models
const { Genre } = require('../../../database/database')

//! Service
const serviceGetGenresFromDatabase = async () => {
  const genres = await Genre.findAll()
  return genres
}

module.exports = {
  serviceGetGenresFromDatabase
}
