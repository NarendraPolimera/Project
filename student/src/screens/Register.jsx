import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import {  Redirect } from 'react-router-dom';
import '../App.css';



function Register({history}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        textChange: 'Register'
      });
      const { name, email, password1, password2, textChange } = formData;

    //handle change from inputs
    const handleChange=text=>e=>{
        setFormData({...formData,[text]:e.target.value});
    }  

    //Submit data to backend
    const handleSubmit=e=>{
        e.preventDefault();
        if( name && email && password1)
        {
            if(password1===password2)
            {
                axios.post(`${process.env.REACT_APP_API_URL}/register`,{name, email, password:password1})
                .then(res=>{
                    setFormData({...formData, name: '', email: '', password1: '', password2: ''});
                    toast.success(res.data.message);
                })
                .catch(err => {
                    setFormData({
                      ...formData,
                      name: '',
                      email: '',
                      password1: '',
                      password2: '',
                      textChange: 'Sign Up'
                    });
                    console.log(err);
                    toast.error(err.response.data.error);
                  });
                
            }
            else
            {
                toast.error('passwords do not match');
            }
        }
        else
        {
            toast.error('please fill all the details');
        }
    }
    return (
        <>
        {isAuth() ? <Redirect to='/' /> : null}
        <ToastContainer />
        <div class="section" style={{paddingTop:"100px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"135px", fontSize:"75px"}}>REGISTER</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                <input
                    class="form-field"
                    type='text'
                    placeholder='Username'
                    onChange={handleChange('name')}
                    value={name}
                  />
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
                    onChange={handleChange('password1')}
                    value={password1}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange('password2')}
                    value={password2}
                  />
                  <button type='submit' class='but' style={{width:"100%", margin:"0px", marginBottom:"30px"}}><span>{textChange}</span></button>
            </form>
          </div>
          </div>
          </div>
        </div>
        

        </>
    );
  }
  
  export default Register;