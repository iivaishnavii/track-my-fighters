import React from 'react';
import Nav from './components/Nav'
import Details from './components/Details'
import Map from './components/Map'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Switch>
            <Route path="/map" exact component={Map}></Route>
            <Route path="/details" exact component={Details}></Route>
            <Route path="/login" exact component={Login}></Route>
          </Switch>
       
      </div>
    </Router>
   
  );
}



export default App;
