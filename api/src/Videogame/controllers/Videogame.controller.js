/* eslint-disable camelcase */
//! Services
const { serviceGetVideogamesFromAPI } = require('../services/services External API/GetVideogames.service')
const { serviceGetVideogameByIDFromAPI } = require('../services/services External API/GetVideogameByID.service')
const { serviceGetVideogamesByQueryFromAPI } = require('../services/services External API/GetVideogamesByQuery.service')
const { serviceSaveVideogameInDatabase } = require('../services/services Database/SaveVideogame.service')
const { serviceGetVideogameByIDFromDatabase } = require('../services/services Database/GetVideogameByID.service')

//! Handlers
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

    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

    const videogame = (regex.test(idVideogame))
      ? await serviceGetVideogameByIDFromDatabase(idVideogame)
      : await serviceGetVideogameByIDFromAPI(idVideogame)

    res.status(200).send({ status: 'FOUND', data: videogame })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

// TODO: Agregar la propiedad slug al registro para poder utilizarlo para los filtros en el frontend
const postVideogame = async (req, res) => {
  try {
    const { name, released, background_image, website, rating, rating_top, movies_count, ratings_count, platforms, genres, tags, description_raw } = req.body

    // const infoQuery = `${id}, ${name}, ${released}, ${background_image}, ${website}, ${rating}, ${rating_top}, ${ratings}, ${movies_count}, ${ratings_count}, ${platforms}, ${genres}, ${tags}, ${description_raw}`
    const newVideogame = await serviceSaveVideogameInDatabase({ name, released, background_image, website, rating, rating_top, movies_count, ratings_count, platforms, genres, tags, description_raw })

    res.status(201).send({ status: 'CREATED', data: newVideogame })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getVideogames,
  getVideogameByID,
  postVideogame
}
