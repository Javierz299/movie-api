import React from 'react'
import '../Pagnation/pagnation.css'

const Pagnation = ({page,setPage,totalPages}) => {
    const adjustPage = (amount) => {
        setPage(prevPage => prevPage + amount)
    }
    console.log('totalpages',totalPages)
    return (
        <div className="pagnation-container">
           {page !== 1 && <span onClick={() => adjustPage(-1)} >{"Prev"}</span>}
            {page !== 1 && <span onClick={() => setPage(1)} >1</span>}

            {page > 2 && <span>{"..."}</span>}
            {page > 2 &&  <span onClick={() => adjustPage(-1)}>{page - 1}</span>}

            <span>{page}</span>

            {totalPages && <span onClick={() => adjustPage(1)}>{page + 1}</span>}
            {totalPages && <span onClick={() => adjustPage(1)}>{"Next"}</span>}
        </div>
    )
}

export default Pagnation
