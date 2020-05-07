import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <h3>Track Fire Fighters</h3>
        <ul>
            <Link to="/map"><li>FireFighters</li></Link>
            <Link to="/details"><li>Details</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
