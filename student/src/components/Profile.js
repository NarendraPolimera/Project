import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../images/profile picture.jpg';
import '../index.css'
function Profile() {
  return (
    <>
      <div className='nav2'><h1>Profile</h1></div>
      
        <img src={img} alt='profile' width='900'/>
      <div className='pro'>  
         <p>name</p> 
        
      </div>
      
    </>
             );
}

export default Profile;
