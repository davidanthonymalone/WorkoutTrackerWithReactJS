import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
 
  <div className="header">
        <h1 align="center">Workout Tracker</h1>
        <Link to="/">Home</Link> | <Link to="/about">about</Link>
   
  </div>

    
    )
    
}

export default Header;