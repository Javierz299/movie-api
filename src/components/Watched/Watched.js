import React from 'react'

import WatchedCard from '../WatchedCard/WatchedCard'

const WatchedList = () => {

        let getData = localStorage.getItem('watched')
        let stored = JSON.parse(getData)
        console.log('local watch',stored)
    
        return (
        <div>
            { !stored && <h2 className="no-movies-yet">Start adding to your list!</h2> }
            
           {stored && stored.map(movie => (
               movie === null ? null : 
            <div className="watched-movies-container" key={movie.id} >
                    <div className="watched-list-box">
                        <WatchedCard movie={movie}/>
                    </div> 
            </div>
           ))
           }

        </div>
    )
}

export default WatchedList;