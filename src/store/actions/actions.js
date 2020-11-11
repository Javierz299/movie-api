import * as ACTION_TYPES from './action_types'

export const search_movie = (movie) => {
   return {
    type: ACTION_TYPES.SEARCH_MOVIE,
    payload: movie,
   }
}

export const watched_movie = (watched) => {
    return {
        type: ACTION_TYPES.WATCHED_MOVIE,
        payload: watched,
    }
}