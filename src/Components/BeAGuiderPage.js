import React from 'react'
import './BeAGuider/BeAGuiderPage.css'
import axios from 'axios'

class BeAGuiderPage extends React.Component {
  isUsedMail = () => {}
  isLongEnough = () => {}
  isSamePassword = () => {}
  showSignIn = () => {}
  postBeAGuider = () => {
    let PostGuiderURL = ''
    let Form = new FormData()
    Form.append('username',document.getElementById('guiderUsername').value)
    Form.append('avatar',this.state.avatar)
    Form.append('email',document.getElementById('guiderEmail').value)
    Form.append('password',document.getElementById('guiderPassword').value)
    Form.append('country',document.getElementById('guiderCountry').value)
    Form.append('city',document.getElementById('guiderCity').value)
    Form.append('languages',this.state.languages)
    axios.post(PostGuiderURL, Form).then((result) => console.log(result))
  }
  fileSelectedHandler = event => {
    let reader = new FileReader()
    reader.onload = () => {
      if(reader.readyState == 2) {
        document.getElementsByClassName('previewAvatar')[0].innerHTML=`<img style="object-fit: cover;width: 100%;height: 100%; border-radius: 8px;" src=${reader.result}>`
      }
    }
    reader.readAsDataURL(event.target.files[0])
    this.setState({avatar:event.target.files[0]})
  }
  languagesUpload = event => {
    console.log(event.target.files)
    this.setState({languages:event.target.files})
  }
  render() {
    return (
    <div className="BeAGuiderPage">
      <div>
        <img style={{objectFit: "cover",width: "100%", marginTop: "80%"}} src="https://easylanguageeasylife.com/wp-content/uploads/2019/10/kisspng-tour-guide-museum-clip-art-comic-book-guide-5a8264fe7a8fb6.268333341518494974502.png"></img>
      </div>
      <div className="mainBeAGuider">
      <h1>BE ONE OF OUR TOUR GUIDES</h1>
      <form>
        <div>
          <label for="username">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="username" id="guiderUsername" required></input>
        </div>
        <div>
          <label for="email">
            <b>Email</b>
            <div className="registerNotify" id="okEmail">
              <img style={{ height: "15px" }} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
            </div>
            <div className="registerNotify" id="usedEmail">This Email is already used</div>
            <div className="registerNotify" id="notAnEmail">This is not an Email</div>
          </label>
          <input type="text" placeholder="Enter Email" name="email" id="guiderEmail" onChange={this.isUsedMail} required></input>
        </div>
        <div>
          <label for="Country">
            <b>Country</b>
          </label>
          <input type="text" placeholder="Enter Country" name="country" id="guiderCountry" required></input>
        </div>
        <div>
          <label for="City">
            <b>City</b>
          </label>
          <input type="text" placeholder="Enter Country" name="City" id="guiderCity" required></input>
        </div>
        <div>
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="guiderPassword" onChange={this.isLongEnough} required></input>
        </div>
        <div>
          <label for="password-repeat">
            <b>Repeat Password</b>
            <div className="registerNotify" id="okRepeatPassword">
              <img style={{ height: "15px" }} src="https://tranggiadung.com/wp-content/uploads/2017/07/Ok-icon.png"></img>
            </div>
            <div className="registerNotify" id="wrongRepeatPassword">Not the same password</div>
          </label>
          <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat-guider" onChange={this.isSamePassword} required></input>
        </div>
        <div>
          <label for="avatar"><b>Profile Picture</b></label>
          <input type="file" placeholder="Avatar" name="avatar" id="avatar" accept="image/jpg, image/jpeg, image/png" onChange={this.fileSelectedHandler} required></input>
          <div className="previewAvatar">Preview Profile Image</div>
        </div>
        <div>
          <label for="languages"><b>Languages Degrees or Certifications</b></label>
          <input type="file" placeholder="Languages" name="languages" id="languages" accept="image/jpg, image/jpeg, image/png" onChange={this.languagesUpload} required multiple></input>
        </div>
      </form>
      <button type="submit" className="register" onClick={this.postBeAGuider}>Register</button>
    </div>
    <div>
        <img style={{objectFit: "cover",width: "70%"}} src="./images/pngwave.png"></img>
    </div>
    </div>
  );
  }
}

export default BeAGuiderPage;