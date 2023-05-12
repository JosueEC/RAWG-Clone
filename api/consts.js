const SERVER_CONST = Object.freeze({
  SERVER_PORT: '3001',
  CORS_PORT: '3000',
  CORS_DOMAIN: 'http://localhost'
})

const EXTERNAL_API_CONST = Object.freeze({
  API_DOMAIN: 'https://api.rawg.io/api',
  API_KEY: 'key=816df41f0556466bbff46787dfb58e50'
})

module.exports = {
  SERVER_CONST,
  EXTERNAL_API_CONST
}
