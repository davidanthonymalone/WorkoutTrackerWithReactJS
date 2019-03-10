import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        
        
<div class="header">
	<div class="header-center">
		<h1 align="center">Workout Tracker</h1>
	</div>
	<Link class="btn" to="/">Home</Link>
	<Link class="btn" to="/about">About</Link>
	<Link class="btn" to="/contact">Contact</Link>
</div>
 
 

    
    )
    
}

export default Header;