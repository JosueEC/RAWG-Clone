//! Consts and Envoiroment variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Formatters
const { formatArrayOfChildPlatforms } = require('./formatters/formatArrayOfChildPlatforms')

//! Service
const serviceGetChildPlatfromsFromAPI = async () => {
  //! https://api.rawg.io/api/platforms?key=123
  const childPlatforms = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/platforms?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatChildPlatforms = formatArrayOfChildPlatforms(childPlatforms)
  return newFormatChildPlatforms
}

module.exports = {
  serviceGetChildPlatfromsFromAPI
}
