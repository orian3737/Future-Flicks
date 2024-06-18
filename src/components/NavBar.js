import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
    return(
        <nav className='navbar'>
            <NavLink to ="/app" activeClassName="active-link">
                Home
            </NavLink>
            <h1>~ We got The Movies ~</h1>
            <NavLink to="/LinksPage" activeClassName="active-link">
                Links
            </NavLink>
        </nav>
    );
}

export default NavBar;