//! Constants and Envoiroment Variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Formatters

//! Service
const serviceGetGenresFromAPI = async () => {
  //! Todos los generos: "https://api.rawg.io/api/genres?key=123"
  const genres = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/genres?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  return genres
}

module.exports = {
  serviceGetGenresFromAPI
}
