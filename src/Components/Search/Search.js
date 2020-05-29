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
                <button type="submit" >Sign In</button>
                <button type="submit" >Register</button>
                <div style={{fontSize: "26px",marginTop:"20px"}}>Sign In with 
                    <img style={{height: "30px",width:"30px",marginRight:"10px",marginLeft:"10px"}} src="https://img.icons8.com/plasticine/2x/google-logo.png" ></img>
                     or 
                    <img style={{height: "30px",width:"30px",marginRight:"10px",marginLeft:"10px"}} src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" ></img>
                </div>
            </div>
        </div>
    );
}

export default Search;
