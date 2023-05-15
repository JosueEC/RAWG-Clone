//! Models
const { genre } = require('../../../database/database')

const serviceSaveGenresInDatabase = async (arrayOfGenres) => {
  await genre.bulkCreate(arrayOfGenres)
}

module.exports = {
  serviceSaveGenresInDatabase
}
