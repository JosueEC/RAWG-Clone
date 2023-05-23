import { FILTER_VIDEOGAMES_ORDER, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, FILTER_GAMES_PLATFORM } from './actions'
// import { FILTER } from '../../consts'

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
        auxVideogames: state.videogames,
        videogames: state.videogames.sort()
      }
    case FILTER_GAMES_PLATFORM:
      return {
        ...state,
        videogames: [...state.auxVideogames].filter((game) => game.platforms.includes(action.payload))
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
