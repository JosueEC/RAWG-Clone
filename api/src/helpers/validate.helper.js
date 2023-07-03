const { validationResult } = require('express-validator')
const { HTTP_BAD_REQUEST } = require('../utils/httpCodes')
const { httpResponse } = require('../utils/httpResponse')

const validate = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    httpResponse(res, HTTP_BAD_REQUEST, error.array())
  }
}

module.exports = { validate }
