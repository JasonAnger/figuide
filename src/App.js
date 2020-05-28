import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import MainPage from './Components/LandingPage/MainPage'
import SubPage from './Components/LandingPage/SubPage'
import Footer from './Components/Footer/Footer'
import SignUpLogin from './Components/SignUpLogin/SignUpLogin';

function App() {
  const isLoggedIn = false//props.isLoggedIn;
  if(!isLoggedIn) return (
    <div className="App">
      <NavBar />
      <MainPage />
      <img src="./images/Vector Divider.png" style={{width: "100%"}}></img>
      <SubPage />
      <Footer />
      <SignUpLogin />
    </div>
  ); 
  else return (
    <div className="App">
      <NavBar />
      <MainPage />
      <img src="./images/Vector Divider.png" style={{width: "100%"}}></img>
      <SubPage />
      <Footer />
    </div>
  );
}

export default App;
