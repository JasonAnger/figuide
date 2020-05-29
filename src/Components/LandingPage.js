import React from 'react';
import MainPage from './LandingPage/MainPage'
import SubPage from './LandingPage/SubPage'
import Footer from './Footer/Footer'

function LandingPage() {
  return (
      <div className="LandingPage">
        <MainPage />
        <img src="./images/Vector Divider.png" style={{width: "100%"}}></img>
        <SubPage />
        <Footer />
      </div>
  );
}

export default LandingPage;