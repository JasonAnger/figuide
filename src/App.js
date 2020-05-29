import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const isLoggedIn = false//props.isLoggedIn;
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={LandingPage}></Route>
      </div>
    </Router>
  );
}

export default App;
