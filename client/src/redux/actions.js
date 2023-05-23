/* eslint-disable no-undef */
import { API } from '../../consts'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_GAME'
export const POST_VIDEOGAME = 'POST_VIDEOGAME'
export const ORDER_GAMES_RATING_ASC = 'ORDER_GAMES_RATING_ASC'
export const ORDER_GAMES_RATING_DESC = 'ORDER_GAMES_RATING_DESC'
export const ORDER_GAMES_RANDOM = 'ORDER_GAMES_RANDOM'
export const FILTER_GAMES_PLATFORM = 'FILTER_GAMES_PLATFORM'
export const FILTER_GAMES_GENRE = 'FILTER_GAMES_GENRE'
export const FILTER_GAMES_ORIGIN = 'FILTER_GAMES_ORIGIN'

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

const orderGamesByRatingAsc = () => {
  return function (dispatch) {
    console.info('rating +')
    dispatch({ type: ORDER_GAMES_RATING_ASC })
  }
}

const orderGamesByRatingDesc = () => {
  return function (dispatch) {
    dispatch({ type: ORDER_GAMES_RATING_DESC })
  }
}

const orderGamesRandom = () => {
  return function (dispatch) {
    dispatch({ type: ORDER_GAMES_RANDOM })
  }
}

const filterGamesByPlatform = (query) => {
  return function (dispatch) {
    console.info(query)
    dispatch({ type: FILTER_GAMES_PLATFORM, payload: query })
  }
}

const filterGamesByGenre = (genre) => {
  return function (dispatch) {
    dispatch({ type: FILTER_GAMES_GENRE, payload: genre })
  }
}

const filterGamesByOrigin = (origin) => {
  return function (dispatch) {
    dispatch({ type: FILTER_GAMES_ORIGIN, payload: origin })
  }
}

export {
  getVideogames,
  getVideogamesByName,
  postVideogame,
  orderGamesByRatingAsc,
  orderGamesByRatingDesc,
  orderGamesRandom,
  filterGamesByPlatform,
  filterGamesByGenre,
  filterGamesByOrigin
}
