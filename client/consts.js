const ROUTER = Object.freeze({
  LANDING: '/',
  HOME: '/home',
  DETAILS: '/details/:videogameID',
  FORM: '/form'
})

const API = Object.freeze({
  DOMAIN: 'http://localhost:3001'
})

const FILTER = Object.freeze({
  PC: 'PC'
})

export {
  ROUTER,
  API,
  FILTER
}
