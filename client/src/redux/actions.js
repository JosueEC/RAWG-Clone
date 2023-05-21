import { API } from '../../consts'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'

const getVideogames = async () => {
  const URL = `${API.DOMAIN}/videogames`

  const videogames = await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.info('Fetching GET Videogames')
      return data
    })
  console.log('videogames: ', videogames)
}

export {
  getVideogames
}
