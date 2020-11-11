import React, { Fragment } from 'react'
import config from '../../config/config'
import * as ACTIONS from '../../store/actions/actions'

import { useDispatch, useSelector } from 'react-redux'

const MoiveCard = ({movie}) => {
    const watched = useSelector(state => state.movie_reducer.watched_list)
    const dispatch = useDispatch()

    let storedMovie = watched.find(watch => watch.id === movie.id)

    return (
        <Fragment>
            <h2>{movie.title}</h2>
            <h4>{movie.release_date.substring(0,4)}</h4>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} />
            {!storedMovie ? 
            <button onClick={() => dispatch(ACTIONS.watched_movie({
                id: movie.id,
                title: movie.title,
                release: movie.release_date.substring(0,4),
                img: movie.poster_path
                }))}>
                ADD TO WATCHLIST
                </button> :
                <button>WATCHED</button>
        }
            
        </Fragment>
    )
}

export default MoiveCard
