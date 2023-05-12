require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

const { formatArrayOfVideogames } = require('./formatters/formatArrayOfVideogames')

const serviceGetVideogamesByQueryFromAPI = async (name) => {
  // ! No. Por nombre: "https://api.rawg.io/api/games?key=123&search=gta&page_size=1"
  const videogames = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/games?key=${API_KEY}&search=${name}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatVideogames = formatArrayOfVideogames(videogames)
  return newFormatVideogames
}

module.exports = {
  serviceGetVideogamesByQueryFromAPI
}
