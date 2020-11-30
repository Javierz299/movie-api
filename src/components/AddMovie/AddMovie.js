import React, { useState } from 'react'
import * as ACTIONS from '../../store/actions/actions'
import config from '../../config/config'
import axios from 'axios'

import './addMovie.css'

import SearchList from '../SearchList/SearchList'

import { useDispatch } from 'react-redux'

const AddMovie = () => {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        console.log('targer',e.target.value)
        axios.get(`${config.API_ENDPOINT}/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`)
            .then(res => dispatch(ACTIONS.search_movie(res.data.results)))
    }

    return (
        <div className="search-container">
            <div className="search-bar-wrapper" >
                <p>Two character minimum to start search.</p>
                <input type="text" 
                       placeholder="search for movies" 
                       value={query}
                       onChange={search}
                />
                <SearchList />
            </div>
        </div>
    )
}

export default AddMovie;