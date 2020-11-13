import React, { useState } from 'react'

import config from '../../config/config'


const WatchedList = () => {
    const [flip, setFlip] = useState(false)

        let getData = localStorage.getItem('watched')
        let stored = JSON.parse(getData)
    console.log('local watch',stored)
    
    const flip_movie_card = (e) => {
        console.log('id',e)
       setFlip(!flip)
    }
  console.log('flip',flip)
    return (
        <div>
            { !stored && <h2>Start adding to your list!</h2> }
            
           {stored && stored.map(movie => (
               movie === null ? null : 
            <div key={movie.id} >
                    <div>
                        <h2>{movie.title}</h2>
                        {flip ?
                            <div onClick={() => flip_movie_card()}>
                                <h2>{movie.overview}</h2>
                            </div> :
                                <img onClick={() => flip_movie_card()}
                                src={`${config.IMG_ENDPOINT}/${movie.img}`} 
                                alt={`${movie.title} Poster`} />
                        }
                        
                    </div> 
            </div>
           ))
           }

        </div>
    )
}

export default WatchedList;