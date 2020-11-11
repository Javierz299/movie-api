import React from 'react'

const MoiveCard = ({movie}) => {
    return (
        <div key={movie.id}>
            <h2>{movie.title}</h2>
        </div>
    )
}

export default MoiveCard
