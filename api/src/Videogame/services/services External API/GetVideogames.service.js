require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

const { formatArrayOfVideogames } = require('./formatters/formatArrayOfVideogames')

const serviceGetVideogamesFromAPI = async () => {
  // ! No. Videojuegos: "https://api.rawg.io/api/games?key=123&page_size=1"
  const videogames = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/games?key=${API_KEY}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  if (videogames.length === 0) throw new Error('Failed to GET videogames from external API RWAG')
  const newFormatVideogames = formatArrayOfVideogames(videogames)
  return newFormatVideogames
}

module.exports = { serviceGetVideogamesFromAPI }
