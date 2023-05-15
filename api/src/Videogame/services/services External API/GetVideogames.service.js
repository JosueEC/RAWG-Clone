//! Consts and Envoironment variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Formatters
const { formatArrayOfVideogames } = require('./formatters/formatArrayOfVideogames')

//! Service
const serviceGetVideogamesFromAPI = async () => {
  //! https://api.rawg.io/api/games?key=123&page_size=1
  const videogames = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/games?key=${API_KEY}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatVideogames = formatArrayOfVideogames(videogames)
  return newFormatVideogames
}

module.exports = { serviceGetVideogamesFromAPI }
