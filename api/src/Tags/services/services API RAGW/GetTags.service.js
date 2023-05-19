//! Consts and Envoironment variables
require('dotenv').config()
const { API_KEY } = process.env
const { EXTERNAL_API_CONST } = require('../../../../consts')
const fetch = require('node-fetch')

//! Formatters
const { formatArrayOfTags } = require('./formatters/formatArrayOfTags')

//! Service
const serviceGetTagsFromAPI = async () => {
  //! https://api.rawg.io/api/tags?key=123&page_size=20
  const tags = await fetch(`${EXTERNAL_API_CONST.DOMAIN}/tags?key=${API_KEY}&${EXTERNAL_API_CONST.PAGE_SIZE}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
  const newFormatTags = formatArrayOfTags(tags)
  return newFormatTags
}

module.exports = {
  serviceGetTagsFromAPI
}
