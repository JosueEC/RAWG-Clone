const httpResponse = (res, statusObject, data) => {
  res.status(statusObject).send({
    code: statusObject.CODE,
    status: statusObject.STATUS,
    data
  })
}

module.exports = { httpResponse }
