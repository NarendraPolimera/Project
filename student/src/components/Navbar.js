import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import {signout} from '../helpers/auth';
import {useState} from 'react';


 
const  Navbar = () => {

    const [lo, setLo] = useState('Login');

    const handleClick =() => {
        setLo('signout');
    }
    return (
        <> 
        <nav className="navbar">
        
            <h1>Eguru</h1>
            <div className="links">
            {/*<button onClick={() => loginClick('/Login') }>Login</button>*/}
              <Link to='/{{lo}}' style={{fontSize: 150, padding:10, display:'flex', color:'whitesmoke' }} onClick={handleClick}>{lo}</Link>
            </div>
        </nav>
        
        </>
    );
}


 
export default Navbar;