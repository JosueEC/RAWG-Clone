import { FILTER_VIDEOGAMES_ORDER, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from './actions'

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
        auxVideogames: state.videogames,
        videogames: action.payload
      }
    case FILTER_VIDEOGAMES_ORDER:
      return {
        ...state,
        videogames: [...state.videogames].sort((a, b) => a.name - b.name),
        auxVideogames: state.videogames
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer
