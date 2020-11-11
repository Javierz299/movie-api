import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

const WatchedList = () => {
    //const watched = useSelector(state => state.movie_reducer.watched_list)
        let getData = localStorage.getItem('watched')
        let stored = JSON.parse(getData)
    console.log('local watch',stored)        
  
    return (
        <div>
           {stored &&
           stored.map(movie => (
               movie === null ? null : 
           <h2 key={movie.id}>{movie.title}</h2>
           ))

           }
        </div>
    )
}

export default WatchedList;