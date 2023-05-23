import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, FILTER_GAMES_PLATFORM, FILTER_GAMES_GENRE, FILTER_GAMES_ORIGIN, ORDER_GAMES_RATING_ASC, ORDER_GAMES_RATING_DESC, ORDER_GAMES_RANDOM } from './actions'

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
    case ORDER_GAMES_RANDOM:
      return {
        ...state,
        videogames: state.auxVideogames
      }
    case ORDER_GAMES_RATING_ASC:
      return {
        ...state,
        videogames: [...state.auxVideogames].sort((a, b) => b.rating - a.rating)
      }
    case ORDER_GAMES_RATING_DESC:
      return {
        ...state,
        videogames: [...state.auxVideogames].sort((a, b) => b.rating - b.rating)
      }
    case FILTER_GAMES_PLATFORM:
      return {
        ...state,
        videogames: [...state.auxVideogames].filter((game) => game.platforms.includes(action.payload))
      }
    case FILTER_GAMES_GENRE:
      return {
        ...state,
        videogames: [...state.auxVideogames].filter((game) => game.genres.includes(action.payload))
      }
    case FILTER_GAMES_ORIGIN:
      return {
        ...state,
        videogames: [...state.auxVideogames].filter((game) => game.origin === action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

// function filterBy (state, payload) {
//   switch (payload) {
//     case FILTER.PC:
//       return state.videogames.filter((game) => game.platforms.includes('pc'))
//   }
// }

// function selectOrder (state, order) {
//   if (order === 'a-z') {
//     console.info('a-z')
//     return [...state.videogames].sort((a, b) => a.name - b.name)
//   } else if (order === 'z-a') {
//     console.info('z-a')
//     return [...state.videogames].sort((a, b) => b.name - a.name)
//   } else {
//     console.info('random')
//     return state.auxVideogames
//   }
// }

export default rootReducer
