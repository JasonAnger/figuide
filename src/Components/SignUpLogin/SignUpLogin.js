import React from 'react';
import './SignUpLogin.css';

function SignUpLogin() {
    let hideSignUp = () => {
        document.getElementById('SignUpLogin').style.display = "none"
    }
    return (
        <div id="SignUpLogin">
            <div className="clickHide" onClick={hideSignUp}>
            </div>
            <div className="SignUp animate__animated animate__fadeInDown animate__fadeInDown">
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
                    </div>
                    <div>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
                    </div>
                    <div>
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
                    </div>
                </form>
                <button type="submit">Sign In</button>
                <button type="submit">Register</button>
            </div>
        </div>
    );
}

export default SignUpLogin;
