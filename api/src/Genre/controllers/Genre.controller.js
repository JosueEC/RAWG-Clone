//! Services
const { serviceGetGenresFromAPI } = require('../services/services External API/GetGenres.service')

//! Handlers
const getGenres = async (req, res) => {
  try {
    const genres = await serviceGetGenresFromAPI()
    res.status(302).send({ status: 'FOUND', data: genres })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getGenres
}
