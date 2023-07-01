//! Services
const { serviceGetParentPlatformsFromAPI } = require('../services/services External API/GetParentPlatforms.service')

//! Utils
const { httpResponse } = require('../../utils/httpResponse')
const { HTTP_FOUND, HTTP_NOT_FOUND } = require('../../utils/httpCodes')

//! Handlers
const getParentPlatforms = async (req, res) => {
  try {
    const platforms = await serviceGetParentPlatformsFromAPI()
    httpResponse(res, HTTP_FOUND, platforms)
  } catch (error) {
    httpResponse(res, HTTP_NOT_FOUND, error.message)
  }
}

module.exports = {
  getParentPlatforms
}
