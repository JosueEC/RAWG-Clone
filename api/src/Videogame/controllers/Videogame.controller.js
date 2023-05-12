const { serviceGetVideogamesFromAPI } = require('../services/services External API/GetVideogames.service')

const getVideogames = async (req, res) => {
  try {
    const videogames = await serviceGetVideogamesFromAPI()
    res.status(302).send({ status: 'FOUND', data: videogames })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

const getVideogameByID = async (req, res) => {
  try {
    const { idVideogame } = req.params
    // const videogame = await serviceGetVideogameByID(idVideogame)
    res.status(200).send({ status: 'FOUND', data: idVideogame })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getVideogames,
  getVideogameByID
}
