import React from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';

function Logging() {
    return (
      <div className="App">
       <h1>this is loggin page !!!</h1>
       <Redirect to="/details"/>
      </div>
    );
  }
  
  export default Logging;