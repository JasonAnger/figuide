import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage'
import TrendingPage from './Components/TrendingPage'
import BeAGuiderPage from './Components/BeAGuiderPage'
import SearchResults from './Components/SearchResults'
import GuiderInformation from './Components/GuiderInformation'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  if(window.location.pathname=="/logout") {localStorage.clear(); window.location.href="/";}
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/trending" component={TrendingPage}></Route>
          <Route path="/beafiguider" component={BeAGuiderPage}></Route>
          <Route path="/results*" component={SearchResults}></Route>
          <Route path="/logout"></Route>
          <Route path="/*" component={GuiderInformation}></Route>
        </Switch>
        <div className="ChatBox"><img src="https://cdn.pixabay.com/photo/2017/06/10/07/21/chat-2389223_960_720.png"></img></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
