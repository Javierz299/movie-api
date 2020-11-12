import React from 'react'

import config from '../../config/config'


const WatchedList = () => {
    //const watched = useSelector(state => state.movie_reducer.watched_list)
        let getData = localStorage.getItem('watched')
        let stored = JSON.parse(getData)
    console.log('local watch',stored)        
  
    return (
        <div>
            {
            !stored && <h2>Start adding to your list!</h2>
            }
           {stored &&
           stored.map(movie => (
               movie === null ? null : 
            <div key={movie.id}>
           <h2>{movie.title}</h2>
           <img src={`${config.IMG_ENDPOINT}/${movie.img}`} 
            alt={`${movie.title} Poster`} />
            </div>
           ))

           }
        </div>
    )
}

export default WatchedList;