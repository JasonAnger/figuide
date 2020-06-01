import React from 'react';
import './MainPage.css';

function MainPage() {
    let clickLetsTry = () => {
        document.getElementById('searchButton').click()
    }
    return (
        <div className="MainPage">
            <div className="Left-container">
                <li>Find your</li>
                <li>Tour Guide</li>
                <li>NOW!!</li>
                <div><a href="#" onClick={clickLetsTry}>LET'S TRY</a></div>
            </div>
            <div className="Right-container">
                <img src="../images/Tourists.png"></img>
            </div>
        </div>
    );
}

export default MainPage;
