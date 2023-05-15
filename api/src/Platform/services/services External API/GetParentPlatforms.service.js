//! Consts, Envoironment variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Service
const serviceGetParentPlatformsFromAPI = async () => {
  //! https://api.rawg.io/api/platforms/lists/parents?key=123
  const parentPlatforms = fetch(`${EXTERNAL_API_CONST.DOMAIN}/platforms/lists/parents?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  return parentPlatforms
}

module.exports = {
  serviceGetParentPlatformsFromAPI
}
