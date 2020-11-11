import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    search_movie: null,
};

const Movie_Reducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SEARCH_MOVIE:
            console.log('reducer',action)
            return {
                ...state,
                search_movie: action.payload
            }
        default:
            return state;
    }
}

export default Movie_Reducer;