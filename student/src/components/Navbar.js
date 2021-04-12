import React from 'react';
import Login from'./login';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import './Profile.css'

const loginClick = () => {
    ReactDOM.render(
        <React.StrictMode>
          <Login/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const ProClick = () => {
    ReactDOM.render(
        <React.StrictMode>
          <Profile/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


const  Navbar = () => {
    return (
        <> 
        <nav className="navbar">
            
            <h1>Eguru</h1>
            <div className="links">
                <button class="button" onClick={loginClick}>Login</button>
            </div>
        </nav>
        <nav2 className="nav2">
    <button className="button" onClick={ProClick}>Profile</button>
    <button className="button">About</button>
    <button className="button">Courses</button>
    <button className="button">Features</button>
    </nav2>
        </>
    );
}


 
export default Navbar;