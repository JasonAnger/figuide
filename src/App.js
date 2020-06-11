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

function App() {
  const isLoggedIn = false//props.isLoggedIn;
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/trending" component={TrendingPage}></Route>
          <Route path="/beafiguider" component={BeAGuiderPage}></Route>
          <Route path="/results*" component={SearchResults}></Route>
          <Route path="/guider*" component={GuiderInformation}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
