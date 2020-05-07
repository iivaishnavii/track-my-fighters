import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <h3>Track Fire Fighters</h3>
        <Link to="/login"><h4> Log Out</h4></Link>
    </nav>
  );
}

export default Nav;
