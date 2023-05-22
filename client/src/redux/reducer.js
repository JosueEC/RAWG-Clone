import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from './actions'

const initialState = {
  videogames: [],
  auxVideogames: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        auxVideogames: action.payload
      }
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        videogames: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer
