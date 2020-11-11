import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MoiveCard'

const SearchList = () => {
    const search_list = useSelector(state => state.movie_reducer.search_movie)

    return (
        <section>
            {search_list !== null &&
            search_list.map(movie => (
                <MovieCard movie={movie}/>
                ))   
            }
        </section>
    )
}

export default SearchList
