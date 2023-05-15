//! Models
const { genre } = require('../../../database/database')

//! Service
const serviceSaveGenresInDatabase = async (arrayOfGenres) => {
  await genre.bulkCreate(arrayOfGenres)
}

module.exports = {
  serviceSaveGenresInDatabase
}
