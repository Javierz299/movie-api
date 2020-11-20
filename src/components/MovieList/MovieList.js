import React, { useEffect, useState } from 'react'
import config from '../../config/config'
import MovieListCard from '../MovieListCard/MovieListCard'

import Pagnation from '../Pagnation/Pagnation'

import axios from 'axios'

const MovieList = () => {
    const [movies, setMovies] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => { //https://api.themoviedb.org
        axios.get(`${config.API_ENDPOINT}/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=false`)
            .then(response => setMovies(response.data))
       
    }, [page])
    console.log("movies",movies)
    console.log('page',page)
    return (
        <div className="movie-list-container">
            <h2>Popular movies</h2>
            {movies && <Pagnation page={page} setPage={setPage} totalPages={movies.total_pages}/>}

            {movies &&
            movies.results.map(movie => (
                //pass to component
            <div className="movie-list-box" key={movie.id}>
                <MovieListCard movie={movie}/>
            </div> 
           
            ))
            }

            {movies && <Pagnation page={page} setPage={setPage} totalPages={movies.total_pages}/>}

        </div>
    )
}

export default MovieList;