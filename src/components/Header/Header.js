import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
           <div className="container">
               <div className="logo">
                    <Link to="/" >WatchList</Link>
               </div>
               <nav className="nav-container">
                    <span><Link to="/" >Movie List</Link></span>
                    <span><Link to="/watched" >Watched</Link></span>
                    <span className="add-btn"><Link to="/add" >+ Add</Link></span>
               </nav>

           </div>
        </header>
    )
}

export default Header;
