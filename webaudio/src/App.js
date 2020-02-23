import React from 'react';
import './App.css';
//import SignUp from './containers/Registration/Register'
import Logging from './Logging';
import Registration from './containers/Registration/Register';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Details from './Components/pluginsDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component ={Registration} />
            <Route  path='/logging' component ={Logging} />
            <Route  path='/details' component ={Details} />
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
