import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './components/Profile';
import './index.css';
import Login from './screens/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Register from './screens/Register';
import Activate from './screens/Activate';
import { signout } from './helpers/auth';
ReactDOM.render(
  <BrowserRouter>
  <div>
  <App/>
    <Switch>
  
  <Route  path='/' exact render={props => <Home {...props}/>}/> 
  <Route  path='/Login' render={props => <Login {...props}/>}/>
  <Route  path='/Profile' render={props => <Profile {...props}/>}/>
  <Route  path='/About'  render={props => <About {...props}/>}/>
  <Route  path='/Courses' render={props => <Courses {...props}/>}/>
  <Route  path='/Register' render={props => <Register {...props}/>}/>
  <Route  path='/users/activate/:token' exact render={props => <Activate {...props}/>}/>
  <Route  path='/signout' render={props => <signout {...props}/>}/>
  </Switch>
  <Footer/>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

