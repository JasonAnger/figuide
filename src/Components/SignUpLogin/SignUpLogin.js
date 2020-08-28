import React from 'react';
import './SignUpLogin.css';

function SignUpLogin() {
    let hideSignUp = () => {
        document.getElementById('SignUpLogin').style.display = "none"
        if(document.getElementById('FilterBox')!=null) document.getElementById('FilterBox').style.display="block"
    }
    let showSignIn = () => {
        document.getElementById('signUp').style.display = "none"
        document.getElementById('signIn').style.display = "inline"
    }
    let showSignUp = () => {
        document.getElementById('signIn').style.display = "none"
        document.getElementById('signUp').style.display = "inline"
    }
    let postSignUp = () => {
        let username=document.getElementById('username').value
        let email=document.getElementById('email').value
        let password=document.getElementById('password').value
        let reenterpassword=document.getElementById('password-repeat').value
        let SignUpURL=""
        if (password == reenterpassword) {
            fetch(SignUpURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        window.location="/"
        }
    }
    let postLogin = async () => {
        let username=document.getElementById('usernameLogin').value
        let password=document.getElementById('passwordLogin').value
        let results
        try {
            results = await fetch(`http://localhost:8080/guide/guide/login?password=${password}&username=${username}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(res => res.json())
            localStorage.setItem('email',results.email)
            localStorage.setItem('username',results.username)
            localStorage.setItem('fullname',results.fullname)
            localStorage.setItem('id',results.guide_id?results.guide_id:results.guest_id)
            localStorage.setItem('avatar',results.image)
            localStorage.setItem('isUser',false)
            window.location.href="/"
        } catch(e) {
        }
    }
    let isUsedUsername = async () => {
        let isUsedUsername = (await fetch(`http://localhost:8080/guide/guide/check-username?username=${document.getElementById('username').value}`).then(data => data.json()))
        if(isUsedUsername) { document.getElementById('usedUsername').style.display="inline"; document.getElementById('okUsername').style.display="none"; } 
        else if(document.getElementById('username').value=="") { document.getElementById('usedUsername').style.display="none"; document.getElementById('okUsername').style.display="none"; } 
        else { document.getElementById('usedUsername').style.display="none"; document.getElementById('okUsername').style.display="inline"; } 
    }
    let isUsedMail = async () => {
        let isUsedMail = (await fetch(`http://localhost:8080/guide/guide/check-email?mail=${document.getElementById('email').value}`).then(data => data.json()))
        if(isUsedMail) { document.getElementById('notAnEmail').style.display="none"; document.getElementById('usedEmail').style.display="inline"; document.getElementById('okEmail').style.display="none"; } 
        else if(document.getElementById('email').value.indexOf('@')==-1 && document.getElementById('email').value!=="") {document.getElementById('notAnEmail').style.display="inline"; document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="none"; } 
        else if(document.getElementById('email').value=="") { document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="none"; document.getElementById('notAnEmail').style.display="none";} 
        else {document.getElementById('notAnEmail').style.display="none"; document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="inline"; } 
    }
    let isLongEnough = () => {}
    let isSamePassword = () => {
        if(document.getElementById('password-repeat').value==document.getElementById('password').value) { document.getElementById('okRepeatPassword').style.display="inline"; document.getElementById('wrongRepeatPassword').style.display="none"; } 
        else if(document.getElementById('password-repeat').value=="") { document.getElementById('wrongRepeatPassword').style.display="none"; document.getElementById('okRepeatPassword').style.display="none"; } 
        else { document.getElementById('okRepeatPassword').style.display="none"; document.getElementById('wrongRepeatPassword').style.display="inline"; } 
    }
    return (
        <div id="SignUpLogin">
            <div className="clickHide" onClick={hideSignUp}>
            </div>
            <div className="SignUp animate__animated animate__fadeIn" id="signUp">
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <label for="username">
                            <b>Username</b>
                            <div className="registerNotify" id="okUsername">
                                <img style={{height:"15px"}} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
                            </div>
                            <div className="registerNotify" id="usedUsername">This username is already used</div>
                        </label>
                        <input type="text" placeholder="Enter Username" name="username" id="username" onChange={isUsedUsername} required></input>
                    </div>
                    <div>
                        <label for="email">
                            <b>Email</b>
                            <div className="registerNotify" id="okEmail">
                                <img style={{height:"15px"}} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
                            </div>
                            <div className="registerNotify" id="usedEmail">This Email is already used</div>
                            <div className="registerNotify" id="notAnEmail">This is not an Email</div>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" onChange={isUsedMail} required></input>
                    </div>
                    <div>
                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" onChange={isLongEnough} required></input>
                    </div>
                    <div>
                        <label for="password-repeat">
                            <b>Repeat Password</b>
                            <div className="registerNotify" id="okRepeatPassword">
                                <img style={{height:"15px"}} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
                            </div>
                            <div className="registerNotify" id="wrongRepeatPassword">Not the same password</div>
                        </label>
                        <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat" onChange={isSamePassword} required></input>
                    </div>
                </form>
                <button type="submit" onClick={showSignIn}>Sign In</button>
                <button type="submit" onClick={postSignUp}>Register</button>
                <div style={{fontSize: "26px",marginTop:"20px"}}>Sign In with 
                    <img style={{height: "30px",width:"30px",marginRight:"10px",marginLeft:"10px"}} onClick={showSignIn} src="https://img.icons8.com/plasticine/2x/google-logo.png" ></img>
                     or 
                    <img style={{height: "30px",width:"30px",marginRight:"10px",marginLeft:"10px"}} onClick={showSignIn} src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" ></img>
                </div>
            </div>
            <div className="SignUp animate__animated animate__fadeIn" id="signIn" style={{display:"none"}}>
                <h1>Sign In</h1>
                <form>
                    <div>
                        <label for="usernameLogin"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="usernameLogin" id="usernameLogin" required></input>
                    </div>
                    <div>
                        <label for="passwordLogin"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="passwordLogin" id="passwordLogin" required></input>
                    </div>
                </form>
                <button type="submit" onClick={showSignUp}>Sign Up</button>
                <button type="submit" onClick={postLogin}>Login</button>
                <div className="SignInOptions"> 
                    <img style={{height: "30px",width:"30px",marginRight:"30px",marginLeft:"10px"}} onClick={showSignIn} src="https://img.icons8.com/plasticine/2x/google-logo.png" ></img>
                      Sign In with Google
                </div>
                <div className="SignInOptions"> 
                    <img style={{height: "30px",width:"30px",marginRight:"30px",marginLeft:"10px"}} onClick={showSignIn} src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" ></img>
                      Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default SignUpLogin;
