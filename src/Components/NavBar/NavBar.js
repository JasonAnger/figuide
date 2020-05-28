import React from 'react';
import './NavBar.css';

function NavBar() {
    let signUp = () => {
        document.getElementById('SignUpLogin').style.display="flex"
    }
    return (
        <div className="NavBar">
            <div className="NavLogo"><a href="/"><img src="./images/Figuide Logo.png" style={{height: "57px"}}></img></a></div>
            <div className="NavList">
                <div id="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div><a href="#search">Search</a></div>
                <div><a href="/trending">TRENDING</a></div>
                <div><a href="/beafiguider">Be a Figuider</a></div>
                <div><a href="#" onClick={signUp}>SIGN UP</a></div>
            </div>
        </div>
    );
}

export default NavBar;
