import React, { Fragment } from 'react'
import config from '../../config/config'

const MoiveCard = ({movie}) => {
    return (
        <Fragment>
            <h2>{movie.title}</h2>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt="movie poster"/>
            
        </Fragment>
    )
}

export default MoiveCard
