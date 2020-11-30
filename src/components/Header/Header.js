import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/header.css'

const Header = () => {
    return (
        <header>
           <div className="header-container">
               <h2 className="logo">
                    <Link to="/movie-api" >WatchList</Link>
               </h2>
               <nav className="nav-container">
                    <span><Link to="/" >Movie List</Link></span>
                    <span><Link to="/watched" >Watched</Link></span>
                    <span><Link to="/add" >+ Add</Link></span>
               </nav>

           </div>
        </header>
    )
}

export default Header;
