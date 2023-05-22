import { API } from '../../consts'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_GAME'

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

const getVideogamesByName = async (queryName) => {
  const URL = `${API.DOMAIN}/videogames?name=${queryName}`

  await fetch(URL)
    .then((response) => response.json())
    .then((results) => {
      console.info('Fetching GET Videogames by name')
      console.log(results)
    })
}

export {
  getVideogames,
  getVideogamesByName
}
