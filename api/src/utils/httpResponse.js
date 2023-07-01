const httpResponse = (res, statusObject, data) => {
  res.status(statusObject).send({
    code: statusObject,
    status: ''
  })
}

module.exports = { httpResponse }
