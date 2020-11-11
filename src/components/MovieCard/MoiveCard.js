import React, { useEffect, useState, Fragment } from 'react'
import config from '../../config/config'
import * as ACTIONS from '../../store/actions/actions'

import { useDispatch, useSelector } from 'react-redux'

const MoiveCard = ({movie}) => {
    //const watched = useSelector(state => state.movie_reducer.watched_list)
    //const dispatch = useDispatch()
    const [data, setData] = useState()

    
    let arr = JSON.parse(localStorage.getItem('watched'))

    let filtered = arr === null ? null : arr.find(mov => mov.id === movie.id)

    const local = (data) =>{
        if(localStorage.getItem('watched') === null){
            localStorage.setItem('watched',JSON.stringify([data]))
        } else {
            let storage = localStorage.getItem('watched')
            let parse = JSON.parse(storage)
            localStorage.setItem('watched',JSON.stringify([data,...parse]))
            console.log('update',storage)
        }
        
    }

    return (
        <Fragment>
            <h2>{movie.title}</h2>
            <h4>{movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</h4>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} />
            {!filtered ? 
            <button onClick={() => local({
                id: movie.id,
                title: movie.title,
                release: movie.release_date.substring(0,4),
                img: movie.poster_path
            })}>
                ADD TO WATCHLIST
                </button> :
                <button>WATCHED</button>
        }
            
        </Fragment>
    )
}

export default MoiveCard
