import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.js';


function App() {
  return (




    <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap" rel="stylesheet" />


             <Router>
          <div style={{height:'100%'}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              </Switch>
           </div>
          </Router>
    </div>
  );
}

export default App;
