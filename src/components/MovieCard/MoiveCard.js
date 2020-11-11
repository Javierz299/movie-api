import React, { Fragment } from 'react'
import config from '../../config/config'
import * as ACTIONS from '../../store/actions/actions'

import { useDispatch } from 'react-redux'

const MoiveCard = ({movie}) => {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <h2>{movie.title}</h2>
            <h4>{movie.release_date.substring(0,4)}</h4>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} />
            <button onClick={() => dispatch(ACTIONS.watched_movie({
                title: movie.title,
                release: movie.release_date.substring(0,4),
                img: movie.poster_path
                }))}>
                ADD TO WATCHLIST
                </button>
        </Fragment>
    )
}

export default MoiveCard
