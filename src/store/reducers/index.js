import { combineReducers } from 'redux'
import Movie_Reducer from '../reducers/movie_reducer'

const rootReducr = combineReducers({
    movie_reducer: Movie_Reducer,
});

export default rootReducr;