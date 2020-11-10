import React, { useState } from 'react'
import * as ACTIONS from '../../store/actions/actions'
import config from '../../config/config'

import axios from 'axios'

import { useSelector, useDispatch} from 'react-redux'

const AddMovie = () => {
    const [query, setQuery] = useState("")
    const state = useSelector(state => state.movie_reducer.search_movie)
    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        console.log('targer',e.target.value)
                    //https://api.themoviedb.org/3/movie/550?api_key=a8af73cda7e25b98209f7e5d32ad0261
        axios.get(`${config.API_ENDPOINT}/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${state}`)
            .then(res => console.log('res',res.data.results[0].title))
    }
    dispatch(ACTIONS.search_movie(query))
    console.log('state,',state)
    return (
        <div className="search-container">
            <div className="search-bar-wrapper" >
                <input type="text" 
                       placeholder="search for movies" 
                       value={query}
                       onChange={search}
                />
            </div>
        </div>
    )
}

export default AddMovie;