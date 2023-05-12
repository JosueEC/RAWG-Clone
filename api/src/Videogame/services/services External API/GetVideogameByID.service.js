require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

const { formatSingleVideogame } = require('./formatters/formatSingleVideogame')

const serviceGetVideogameByIDFromAPI = async (idVideogame) => {
  // ! Por id: "https://api.rawg.io/api/games/1?key=123"
  const videogame = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/games/${idVideogame}?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatVideogame = formatSingleVideogame(videogame)
  return newFormatVideogame
}

module.exports = { serviceGetVideogameByIDFromAPI }
