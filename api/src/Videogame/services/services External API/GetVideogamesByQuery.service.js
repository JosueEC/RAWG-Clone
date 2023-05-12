require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

const serviceGetVideogamesByQueryFromAPI = async (name) => {
  // ! No. Por nombre: "https://api.rawg.io/api/games?key=123&search=gta&page_size=1"
  const videogames = fetch(`${EXTERNAL_API_CONST.DOMAIN}/games?key=${API_KEY}&search=${name}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return videogames
}

module.exports = {
  serviceGetVideogamesByQueryFromAPI
}
