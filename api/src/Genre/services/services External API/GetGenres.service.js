//! Constants and Envoironment Variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Formatters
const { formatArrayOfGenres } = require('./formatters/formatArrayOfGenres')

//! Service
const serviceGetGenresFromAPI = async () => {
  //! https://api.rawg.io/api/genres?key=123
  const genres = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/genres?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatGenres = formatArrayOfGenres(genres)
  return newFormatGenres
}

module.exports = {
  serviceGetGenresFromAPI
}
