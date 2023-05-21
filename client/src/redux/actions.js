import { API } from '../../consts'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'

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

export {
  getVideogames
}
