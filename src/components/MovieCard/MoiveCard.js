import React, { useEffect, useState, Fragment } from 'react'
import config from '../../config/config'


const MoiveCard = ({movie}) => {
    const [filtered, setFilter] = useState(null)
    const [clicked, setClicked] = useState(false)

    let change = !filtered ? null : filtered.find(watched => watched.id === movie.id)

    useEffect(() => {
        setFilter(JSON.parse(localStorage.getItem('watched')))
    },[clicked])

    const local = (data) => {
        let storage = localStorage.getItem('watched')
        let parse = JSON.parse(storage)

        if(storage === null){
            setFilter(localStorage.setItem('watched',JSON.stringify([data])))
            setClicked(true)
            return;
        } 
            localStorage.setItem('watched',JSON.stringify([data,...parse]))
            setFilter(JSON.parse(localStorage.getItem('watched')))
            setClicked(true)
    }
    console.log('filtered',filtered,clicked)
    return (
        <Fragment>
            <h2>{movie.title}</h2>
            <h4>{movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</h4>
            
            <img src={`${config.IMG_ENDPOINT}/${movie.poster_path}`} 
            alt={`${movie.title} Poster`} />
            {!change ? 
            <button onClick={() => local({
                id: movie.id,
                title: movie.title,
                release: movie.release_date.substring(0,4),
                img: movie.poster_path,
                overview: movie.overview,
                rating: movie.vote_average,
                watched: true
            })}>
                ADD TO WATCHLIST
                </button> :
                <button>WATCHED</button>
        }
        </Fragment>
    )
}

export default MoiveCard
