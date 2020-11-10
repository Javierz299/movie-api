import * as ACTION_TYPES from './action_types'

export const search_movie = (movie) => {
    console.log('movie',movie)
   return {
    type: ACTION_TYPES.SEARCH_MOVIE,
    payload: movie,
   }
}