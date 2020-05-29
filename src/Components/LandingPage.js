import React from 'react';
import MainPage from './LandingPage/MainPage'
import SubPage from './LandingPage/SubPage'
import Footer from './Footer/Footer'
import SignUpLogin from './SignUpLogin/SignUpLogin'

function LandingPage() {
  const isLoggedIn = false//props.isLoggedIn;
  return (
      <div className="LandingPage">
        <MainPage />
        <img src="./images/Vector Divider.png" style={{width: "100%"}}></img>
        <SubPage />
        <Footer />
        <SignUpLogin />
      </div>
  );
}

export default LandingPage;