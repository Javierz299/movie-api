import React, { Fragment, useState } from 'react'
import '../Watched/watched.css'

import config from '../../config/config'

const WatchedCard = ({movie}) => {
    const [overview, setOverview] = useState(false)
    return (
        <Fragment>
            <h2 className="movie-list-title">{movie.title}</h2>
            {!overview ?
                <img className={!overview ? "overview watched-list-img" : "overview-transition"}
                onClick={() => setOverview(!overview)}
                src={`${config.IMG_ENDPOINT}/${movie.img}`} 
                alt={`${movie.title} Poster`} /> :
            <div>
                <p className={overview ? "overview-transition watched-list-overview" : "overview"} 
               onClick={() => setOverview(!overview)}>
               {movie.overview}
               </p>
            </div>
            }
            
        </Fragment>
    )
}

export default WatchedCard
