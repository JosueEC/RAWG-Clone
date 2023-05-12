require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

const serviceGetVideogamesFromAPI = async () => {
  // ! No. Videojuegos: "https://api.rawg.io/api/games?key=123&page_size=1"
  const videogames = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/games?key=${API_KEY}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  return videogames
}

module.exports = { serviceGetVideogamesFromAPI }
