const { serviceGetVideogamesFromAPI } = require('../services/services External API/GetVideogames.service')
const { serviceGetVideogameByIDFromAPI } = require('../services/services External API/GetVideogameByID.service')
const { serviceGetVideogamesByQueryFromAPI } = require('../services/services External API/GetVideogamesByQuery.service')

const getVideogames = async (req, res) => {
  try {
    const { name } = req.query

    const videogames = (name)
      ? await serviceGetVideogamesByQueryFromAPI(name)
      : await serviceGetVideogamesFromAPI()

    res.status(302).send({ status: 'FOUND', data: videogames })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

const getVideogameByID = async (req, res) => {
  try {
    const { idVideogame } = req.params
    const videogame = await serviceGetVideogameByIDFromAPI(idVideogame)
    res.status(200).send({ status: 'FOUND', data: videogame })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getVideogames,
  getVideogameByID
}
