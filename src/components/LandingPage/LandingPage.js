import React from 'react'
import './landing.css'
import movieDetails from '../Imgs/LandingImgs/movieDetails.png'
import searchMovies from '../Imgs/LandingImgs/Search.png'

const LandingPage = () => {
    return (
        <div className="testing-container">
            <h2>Welcome</h2>
            <p>To get started click on the add button. There,
                you will have access to search through The Movie Database.
                Movies Watched will be saved to your local storage.
            </p>
            <img src={searchMovies} alt="search movies" />
            <p>
                Click on the movie posters in your watched list for movie details.
            </p>
            <img src={movieDetails} alt="watched list" />
        </div>
    )
}

export default LandingPage
