import React from 'react';
import MainPage from './LandingPage/MainPage'
import SubPage from './LandingPage/SubPage'

function LandingPage() {
  return (
      <div className="LandingPage">
        <MainPage />
        <img src="./images/Vector Divider.png" style={{width: "100%"}}></img>
        <SubPage />
      </div>
  );
}

export default LandingPage;