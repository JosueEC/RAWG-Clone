//! Services
const { serviceGetTagsFromAPI } = require('../services/services API RAGW/GetTags.service')
const { serviceGetTagsFromDatabase } = require('../services/services Database/GetTags.service')
const { serviceSaveTagsInDatabase } = require('../services/services Database/SaveTags.service')

//! Utils
const { httpResponse } = require('../../utils/httpResponse')
const { HTTP_FOUND, HTTP_CREATED, HTTP_NOT_FOUND } = require('../../utils/httpCodes')

//! Handlers
const getTags = async (req, res) => {
  try {
    const tagsFromDatabase = await serviceGetTagsFromDatabase()

    if (tagsFromDatabase.length !== 0) {
      httpResponse(res, HTTP_FOUND, tagsFromDatabase)
    } else {
      const tags = await serviceGetTagsFromAPI()
      serviceSaveTagsInDatabase(tags)

      httpResponse(res, HTTP_CREATED, tags)
    }
  } catch (error) {
    httpResponse(res, HTTP_NOT_FOUND, error.message)
  }
}

module.exports = {
  getTags
}
