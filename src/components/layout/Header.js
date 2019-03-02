import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        
        <div class="header">
  
  <div class="header-center">
     <h1 align="center">Workout Tracker</h1>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
         <Link to="/"></Link> <Link to="/contact">Contact</Link>
  </div>
</div>
 
 

    
    )
    
}

export default Header;