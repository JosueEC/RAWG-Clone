//! Services
const { serviceGetGenresFromAPI } = require('../services/services External API/GetGenres.service')
const { serviceGetGenresFromDatabase } = require('../services/services Database/GetGenres.service')
const { serviceSaveGenresInDatabase } = require('../services/services Database/SaveGenres.service')

//! Handlers
const getGenres = async (req, res) => {
  try {
    const genresFromDatabase = await serviceGetGenresFromDatabase()

    if (genresFromDatabase.length !== 0) {
      console.log('genres database: ', genresFromDatabase)
      res.status(302).send({ status: 'FOUND', data: genresFromDatabase })
    } else {
      const genresFromAPI = await serviceGetGenresFromAPI()
      serviceSaveGenresInDatabase(genresFromAPI)

      res.status(201).send({ status: 'CREATED', data: genresFromAPI })
    }
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getGenres
}
