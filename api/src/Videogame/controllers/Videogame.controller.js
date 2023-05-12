const { serviceGetVideogamesFromAPI } = require('../services/services External API/GetVideogames.service')

const getVideogames = async (req, res) => {
  try {
    const videogames = await serviceGetVideogamesFromAPI()
    res.status(302).send({ status: 'FOUND', data: videogames })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getVideogames
}
