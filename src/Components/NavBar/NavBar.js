import React from 'react';
import './NavBar.css';
import SignUpLogin from '../SignUpLogin/SignUpLogin'
import Search from '../Search/Search'

function NavBar() {
    let signUp = () => {
        document.getElementById('SignUpLogin').style.display="flex"
        document.getElementById('signIn').style.display = "none"
        document.getElementById('signUp').style.display = "inline"
    }
    let search = () => {
        document.getElementById('SearchContainer').style.display="flex"
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
                <div id="searchButton" onClick={search}><a href="#">
                    <svg id="findIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="m132.77 118.03l-27.945-27.945c6.735-9.722 10.1-20.559 10.1-32.508 0-7.767-1.508-15.195-4.523-22.283-3.01-7.089-7.088-13.199-12.221-18.332-5.133-5.133-11.242-9.207-18.33-12.221-7.09-3.01-14.518-4.522-22.285-4.522-7.767 0-15.195 1.507-22.283 4.522-7.089 3.01-13.199 7.088-18.332 12.221-5.133 5.133-9.207 11.244-12.221 18.332-3.01 7.089-4.522 14.516-4.522 22.283 0 7.767 1.507 15.193 4.522 22.283 3.01 7.088 7.088 13.197 12.221 18.33 5.133 5.134 11.244 9.207 18.332 12.222 7.089 3.02 14.516 4.522 22.283 4.522 11.951 0 22.787-3.369 32.509-10.1l27.945 27.863c1.955 2.064 4.397 3.096 7.332 3.096 2.824 0 5.27-1.032 7.332-3.096 2.064-2.063 3.096-4.508 3.096-7.332.0001-2.877-1-5.322-3.01-7.331m-49.41-34.668c-7.143 7.143-15.738 10.714-25.787 10.714-10.05 0-18.643-3.572-25.786-10.714-7.143-7.143-10.714-15.737-10.714-25.786 0-10.05 3.572-18.644 10.714-25.786 7.142-7.143 15.738-10.714 25.786-10.714 10.05 0 18.643 3.572 25.787 10.714 7.143 7.142 10.715 15.738 10.715 25.786 0 10.05-3.573 18.643-10.715 25.786" transform="matrix(.11417.00745-.00745.11417 3.93 2.548)"/></svg>
                    Search</a></div>
                <div><a href="/trending">TRENDING</a></div>
                <div><a href="/beafiguider">Be a Figuider</a></div>
                <div><a href="#" onClick={signUp}>SIGN UP</a></div>
            </div>
            <Search />
            <SignUpLogin />
        </div>
    );
}

export default NavBar;
