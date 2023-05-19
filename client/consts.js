const ROUTER = Object.freeze({
  LANDING: '/landing',
  HOME: '/home',
  DETAILS: '/details/:videogameID',
  FORM: '/form'
})

const API = Object.freeze({
  DOMAIN: 'https://api.rawg.io/api'
})

export {
  ROUTER,
  API
}