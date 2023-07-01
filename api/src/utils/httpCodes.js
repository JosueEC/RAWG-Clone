const HTTP_CREATED = Object.freeze({
  CODE: 201,
  STATUS: 'CREATED'
})

const HTTP_FOUND = Object.freeze({
  CODE: 200,
  STATUS: 'FOUND'
})

const HTTP_NOT_FOUND = Object.freeze({
  CODE: 402,
  STATUS: 'NOT FOUND'
})

const HTTP_BAD_REQUEST = Object.freeze({
  CODE: 400,
  STATUS: 'BAD REQUEST'
})

module.exports = {
  HTTP_CREATED,
  HTTP_FOUND,
  HTTP_NOT_FOUND,
  HTTP_BAD_REQUEST
}
