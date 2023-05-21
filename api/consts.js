//! Server Constants
const SERVER_CONST = Object.freeze({
  SERVER_PORT: '3001',
  CORS_DOMAIN: 'http://localhost:5173'
})

//! External API Constants
const EXTERNAL_API_CONST = Object.freeze({
  DOMAIN: 'https://api.rawg.io/api',
  PAGE_SIZE: 'page_size=10'
})

//! Origin Results Constants
const ORIGIN_CONST = Object.freeze({
  DATABASE: 'database',
  RAWG: 'rawg'
})

module.exports = {
  SERVER_CONST,
  EXTERNAL_API_CONST,
  ORIGIN_CONST
}
