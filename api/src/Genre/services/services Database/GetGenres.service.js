//! Models
const { genre } = require('../../../database/database')

//! Service
const serviceGetGenresFromDatabase = async () => {
  const genres = await genre.findAll()
  return genres
}

module.exports = {
  serviceGetGenresFromDatabase
}
