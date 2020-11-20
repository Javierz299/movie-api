import React,{ Fragment, useState } from 'react'
import '../MovieListCard/movieListCard.css'

import config from '../../config/config'

const MovieListCard = ({movie}) => {
    const [details, setDetails] = useState(false)

    return (
        <Fragment>            
            {!details ? 
            <img className="movie-list-img"
            onMouseEnter={() => setDetails(true)}
            
            src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} /> :
            <div className="movie-list-overview" onMouseLeave={() => setDetails(false)}>
                <span className="movie-list-title">{movie.title}</span>
               <p className="movie-list-details">{movie.overview}</p>
            </div>

            }
        </Fragment>
    )
}

export default MovieListCard
