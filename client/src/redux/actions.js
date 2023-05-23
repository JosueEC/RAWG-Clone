/* eslint-disable no-undef */
import { API } from '../../consts'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_GAME'
export const POST_VIDEOGAME = 'POST_VIDEOGAME'
export const FILTER_VIDEOGAMES_ORDER = 'FILTER_VIDEOGAMES_ORDER'
export const FILTER_GAMES_PLATFORM = 'FILTER_GAMES_PLATFORM'

const getVideogames = () => {
  const URL = `${API.DOMAIN}/videogames`

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        console.info('Fetching GET Videogames')
        dispatch({ type: GET_VIDEOGAMES, payload: response.data })
      })
  }
}

const getVideogamesByName = (queryName) => {
  const URL = `${API.DOMAIN}/videogames?name=${queryName}`

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.info('Fetching GET Videogames by name')
        dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: results.data })
      })
  }
}

const postVideogame = (dataVideogame) => {
  const URL = `${API.DOMAIN}/videogames`

  const formatVideogame = {
    name: dataVideogame.name,
    slug: dataVideogame.name.toLowerCase().replace(/\s/g, ''),
    released: dataVideogame.released,
    background_image: dataVideogame.background_image,
    website: dataVideogame.website || '',
    rating: 0,
    rating_top: 0,
    movies_count: 0,
    ratings_count: 0,
    platforms: dataVideogame.platforms,
    genres: dataVideogame.genres,
    tags: dataVideogame.tags,
    description_raw: dataVideogame.description_raw
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formatVideogame)
  }

  return function (dispatch) {
    fetch(URL, options)
      .then((response) => response.json())
      .then((results) => {
        console.info('Fetching-POST-videogame')
        if (results.status === 'CREATED') {
          console.info('Game created')
          alert('Successsfully created video game')
        } else {
          console.log(results)
        }
      })
  }
}

const filterVideogamesOrder = (order) => {
  return function (dispatch) {
    dispatch({ type: FILTER_VIDEOGAMES_ORDER, payload: order })
  }
}

const filterGamesByPlatform = (query) => {
  return function (dispatch) {
    console.info(query)
    dispatch({ type: FILTER_GAMES_PLATFORM, payload: query })
  }
}

export {
  getVideogames,
  getVideogamesByName,
  postVideogame,
  filterVideogamesOrder,
  filterGamesByPlatform
}
