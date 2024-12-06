// src/App.js
import React from 'react';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/screen2">
            <ScreenTwo />
          </Route>
          <Route path="/">
            <ScreenOne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
