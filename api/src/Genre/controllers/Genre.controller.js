//! Services
const { serviceGetGenresFromAPI } = require('../services/services External API/GetGenres.service')
const { serviceGetGenresFromDatabase } = require('../services/services Database/GetGenres.service')

//! Handlers
const getGenres = async (req, res) => {
  try {
    const genresFromDatabase = serviceGetGenresFromDatabase()

    if (genresFromDatabase.length !== 0) {
      res.status(302).send({ status: 'FOUND', data: genresFromDatabase })
    } else {
      const genresFromAPI = await serviceGetGenresFromAPI()
      res.status(302).send({ status: 'FOUND', data: genresFromAPI })
    }
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getGenres
}
