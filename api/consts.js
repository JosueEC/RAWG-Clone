const SERVER_CONST = Object.freeze({
  SERVER_PORT: '3001',
  CORS_PORT: '3000',
  CORS_DOMAIN: 'http://localhost'
})

const EXTERNAL_API_CONST = Object.freeze({
  DOMAIN: 'https://api.rawg.io/api',
  PAGE_SIZE: 'page_size=10'
})

module.exports = {
  SERVER_CONST,
  EXTERNAL_API_CONST
}
