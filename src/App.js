import React from 'react';
//import ReactDOM from 'react-dom';
//import Givedata from './component/Givedata';
//import Getdata from './component/Getdata';
import Home from './component/Home';
import {Route,Switch}from 'react-router-dom';
  
import './App.css';
function App() {
  return (
<Switch>
  <Route exact path="/" render={props=><Home{...props}/>} />
  </Switch>
);}


export default App;
