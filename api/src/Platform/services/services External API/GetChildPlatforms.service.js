//! Consts and Envoiroment variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Service
const serviceGetChildPlatfromsFromAPI = async () => {
  //! https://api.rawg.io/api/platforms?key=123
  const childPlatforms = fetch(`${EXTERNAL_API_CONST.DOMAIN}/platforms?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  return childPlatforms
}

module.exports = {
  serviceGetChildPlatfromsFromAPI
}
