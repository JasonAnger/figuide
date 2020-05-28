import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import MainPage from './Components/LandingPage/MainPage'
import SubPage from './Components/LandingPage/SubPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <SubPage />
    </div>
  );
}

export default App;
