import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import LandingPage from './containers/LandingPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          { !localStorage.jwt
            ? <LandingPage />
              : <Navigation /> }
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
