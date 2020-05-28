import React from 'react';
import './NavBar.css';

function NavBar() {
    const logourl = "../images/Figuide Logo.png"
    return (
        <div className="NavBar">
            <div className="NavLogo"><img src={logourl}></img></div>
            <div className="NavList">
                <div id="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div><a href="/">HOME</a></div>
                <div><a href="/trending">TRENDING</a></div>
                <div><a href="/beafiguider">Be a Figuider</a></div>
                <div><a href="#signup">SIGN UP</a></div>
            </div>
        </div>
    );
}

export default NavBar;
