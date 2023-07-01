//! Services
const { serviceGetChildPlatfromsFromAPI } = require('../services/services External API/GetChildPlatforms.service')
const { serviceGetChildPlatformsFromDatabase } = require('../services/services Database/GetChildPlatforms.service')
const { serviceSaveChildPlatformsInDatabase } = require('../services/services Database/SaveChildPlatforms.service')

//! Utils
const { httpResponse } = require('../../utils/httpResponse')
const { HTTP_FOUND, HTTP_CREATED, HTTP_NOT_FOUND } = require('../../utils/httpCodes')

//! Handlers
const getChildPlatforms = async (req, res) => {
  try {
    const childPlatformsFromDatabase = await serviceGetChildPlatformsFromDatabase()

    if (childPlatformsFromDatabase.length !== 0) {
      httpResponse(res, HTTP_FOUND, childPlatformsFromDatabase)
    } else {
      const childPlatforms = await serviceGetChildPlatfromsFromAPI()
      serviceSaveChildPlatformsInDatabase(childPlatforms)

      httpResponse(res, HTTP_CREATED, childPlatforms)
    }
  } catch (error) {
    httpResponse(res, HTTP_NOT_FOUND, error.message)
  }
}

module.exports = {
  getChildPlatforms
}
