//! Services
const { serviceGetGenresFromAPI } = require('../services/services External API/GetGenres.service')
const { serviceGetGenresFromDatabase } = require('../services/services Database/GetGenres.service')
const { serviceSaveGenresInDatabase } = require('../services/services Database/SaveGenres.service')

//! Utils
const { httpResponse } = require('../../utils/httpResponse')
const { HTTP_FOUND, HTTP_CREATED, HTTP_NOT_FOUND } = require('../../utils/httpCodes')

//! Handlers
const getGenres = async (req, res) => {
  try {
    const genresFromDatabase = await serviceGetGenresFromDatabase()

    if (genresFromDatabase.length !== 0) {
      httpResponse(res, HTTP_FOUND, genresFromDatabase)
    } else {
      const genresFromAPI = await serviceGetGenresFromAPI()
      serviceSaveGenresInDatabase(genresFromAPI)

      httpResponse(res, HTTP_CREATED, genresFromAPI)
    }
  } catch (error) {
    httpResponse(res, HTTP_NOT_FOUND, error.message)
  }
}

module.exports = {
  getGenres
}
