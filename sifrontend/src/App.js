import React from 'react';
import Nav from './components/Nav'
import Details from './components/Details'
import Map from './components/Map'
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
          </Switch>
       
      </div>
    </Router>
   
  );
}



export default App;
