import React, { useEffect, useState } from 'react'
import config from '../../config/config'

import Pagnation from '../Pagnation/Pagnation'

import axios from 'axios'

const MovieList = () => {
    const [movies, setMovies] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => { //https://api.themoviedb.org
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=false`)
            .then(response => setMovies(response.data))
       
    }, [page])
    console.log("movies",movies)
    console.log('page',page)
    return (
        <div>
            <h2>Popular movies</h2>
            {movies && <Pagnation page={page} setPage={setPage} totalPages={movies.total_pages}/>}
            {movies !== null ?
            movies.results.map(movie => (
                //pass to component
            <div key={movie.id}>
                <h2>{movie.title}</h2>

                <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
                alt={`${movie.title} Poster`} />
            </div> 
           
            )) :
            null
            }
        </div>
    )
}

export default MovieList;