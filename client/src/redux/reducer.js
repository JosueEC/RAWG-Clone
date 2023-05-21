import { GET_VIDEOGAMES } from './actions'

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
    default:
      return {
        ...state
      }
  }
}

export default rootReducer
