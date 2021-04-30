import React, { useState } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import {  Redirect, Link } from 'react-router-dom';
import '../App.css';
import Profile from '../components/Profile';

const Login = ({history}) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    //handle change from inputs
    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    //Submit data to backend
    const handleSubmit = e => {
        e.preventDefault();
        if (email && password) {
            axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password })
                .then(res => {
                    console.log("success",res);
                    authenticate(res,()=>{
                    setFormData({ ...formData, email: '', password: '' });
                    toast.success(`Hey ${res.data.user.name}, Welcome back!`);


                    <Profile formData={email} />
                    /**isAuth() !==false? console.log('authen'):console.log('nope');*/
                    isAuth() !==false? history.push('/rout'): history.push('/');
                    })
                    
                })
                .catch(err => {
                    console.log("error",err);
                    setFormData({ ...formData, email: '', password: '' });
                    toast.error(err.response.data.error);
                });

        }
        else {
            toast.error('Plase fill all details');
        }
    }

    if(isAuth()===false)
    {
    return (
        <>
            <ToastContainer />
            
            <div class="section" style={{paddingTop:"250px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"80px", fontSize:"90px"}}><b>SIGN IN</b></div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                
                  <input class="form-field"     
                   type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password')}
                    value={password}
                  />
                  
                  <button type='submit' class="but" style={{width:"80%", margin:"0px", marginBottom:"60px", backgroundColor:"rgb(201, 173, 173"}}>Log In</button>
            </form>

            <br />
          <div style={{alignItems:'center', display:"inline-flex",marginBottom:"40px", width:"100%"}}>
              <div style={{flexGrow:"1", minWidth:"fit-content"}}><Link to='/users/password/forget' class="navigation-link" style={{padding:"0px"}}>forgot password? </Link></div>&nbsp;<br/><b style={{fontSize:'80px'}}>or</b>
              <div style={{flexGrow:"1", minWidth:"fit-content"}}>
                  <Link to='/register' class="link-button">Sign Up</Link>
              </div>
          </div>

          </div>
          
          </div>
          </div>
        </div>
            
        </>
        
    );
    }
    else
    {
        return(<Redirect to='/rout' />);
    }
}

export default Login;