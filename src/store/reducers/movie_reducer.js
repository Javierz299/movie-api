import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    search_movie: null,
    watched_list: [],
};

const Movie_Reducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SEARCH_MOVIE:
            return {
                ...state,
                search_movie: action.payload
            }
        case ACTION_TYPES.WATCHED_MOVIE:
            console.log('reducer',action)
            return {
                ...state,
                watched_list: [action.payload, ...state.watched_list]
            }
        default:
            return state;
    }
}

export default Movie_Reducer;