import React from 'react';
import './Search.css';

function Search() {
    let hideSearch = () => {
        document.getElementById('SearchContainer').style.display="none"
    }
    return (
        <div id="SearchContainer">
            <div className="clickHide" onClick={hideSearch}>
            </div>
            <div className="SignUp animate__animated animate__fadeIn" id="signUp">
                <h1>FIND YOUR GUIDE</h1>
                <form>
                    <div>
                        <label for="email">
                            <b>Username</b>
                            <div className="registerNotify" id="okUsername">
                                <img style={{height:"15px"}} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
                            </div>
                            <div className="registerNotify" id="usedUsername">This username is already used</div>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" id="username" required></input>
                    </div>
                    <div>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
                    </div>
                    <div>
                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required></input>
                    </div>
                    <div>
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" required></input>
                    </div>
                </form>
                <div style={{marginTop: "30px"}}><a id="searchResultsButton" href="/results">Search</a></div>
            </div>
        </div>
    );
}

export default Search;
