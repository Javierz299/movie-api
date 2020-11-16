import React from 'react'

import WatchedCard from '../WatchedCard/WatchedCard'

const WatchedList = () => {

        let getData = localStorage.getItem('watched')
        let stored = JSON.parse(getData)
        console.log('local watch',stored)
    
        return (
        <div>
            { !stored && <h2>Start adding to your list!</h2> }
            
           {stored && stored.map(movie => (
               movie === null ? null : 
            <div className="watched-movies-card" key={movie.id} >
                    <div>
                        <WatchedCard movie={movie}/>
                    </div> 
            </div>
           ))
           }

        </div>
    )
}

export default WatchedList;