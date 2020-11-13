import React, { Fragment, useState } from 'react'
import config from '../../config/config'

const WatchedCard = ({movie}) => {
    const [overview, setOverview] = useState(false)
    return (
        <Fragment>
            <h2>{movie.title}</h2>
            {!overview ?
                <img onClick={() => setOverview(!overview)}
                src={`${config.IMG_ENDPOINT}/${movie.img}`} 
                alt={`${movie.title} Poster`} /> :
               <p onClick={() => setOverview(!overview)}>
               {movie.overview}
               </p>
            }
        </Fragment>
    )
}

export default WatchedCard
