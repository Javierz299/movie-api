import React, { Fragment } from 'react'
import config from '../../config/config'

const MoiveCard = ({movie}) => {
    return (
        <Fragment>
            <h2>{movie.title}</h2>
            <h4>{movie.release_date.substring(0,4)}</h4>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} />
            <button onClick={() => console.log('clicked', movie.title)}>ADD TO WATCHLIST</button>
        </Fragment>
    )
}

export default MoiveCard
