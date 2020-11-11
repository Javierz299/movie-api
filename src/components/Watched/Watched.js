import React from 'react'

import { useSelector } from 'react-redux'

const WatchedList = () => {
    const watched = useSelector(state => state.movie_reducer.watched_list)

    console.log('watched',watched)
    return (
        <div>
           {watched.length > 0 &&
           watched.map(movie => (
           <h2>{movie.title}</h2>
           ))

           }
        </div>
    )
}

export default WatchedList;