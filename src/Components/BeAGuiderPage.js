import React, { useState }  from 'react'
import './BeAGuider/BeAGuiderPage.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import md5 from 'md5'

class BeAGuiderPage extends React.Component {
  state = {
    birthday: new Date(871668123000)
  };
  handleChange = date => {
    this.setState({
      birthday: date
    });
  };
  isUsedUsername = async () => {
      let isUsedUsername = (await fetch(`http://localhost:8080/guide/guide/check-username?username=${document.getElementById('username').value}`).then(data => data.json()))
      if(isUsedUsername) { document.getElementById('usedUsername').style.display="inline"; document.getElementById('okUsername').style.display="none"; } 
      else if(document.getElementById('username').value=="") { document.getElementById('usedUsername').style.display="none"; document.getElementById('okUsername').style.display="none"; } 
      else { document.getElementById('usedUsername').style.display="none"; document.getElementById('okUsername').style.display="inline"; } 
  }
  isUsedMail = async () => {
      let isUsedMail = (await fetch(`http://localhost:8080/guide/guide/check-email?mail=${document.getElementById('email').value}`).then(data => data.json()))
      if(isUsedMail) { document.getElementById('notAnEmail').style.display="none"; document.getElementById('usedEmail').style.display="inline"; document.getElementById('okEmail').style.display="none"; } 
      else if(document.getElementById('email').value.indexOf('@')==-1 && document.getElementById('email').value!=="") {document.getElementById('notAnEmail').style.display="inline"; document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="none"; } 
      else if(document.getElementById('email').value=="") { document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="none"; document.getElementById('notAnEmail').style.display="none";} 
      else {document.getElementById('notAnEmail').style.display="none"; document.getElementById('usedEmail').style.display="none"; document.getElementById('okEmail').style.display="inline"; } 
  }
  isLongEnough = () => {}
  isSamePassword = () => {
      if(document.getElementById('password-repeat').value==document.getElementById('password').value) { document.getElementById('okRepeatPassword').style.display="inline"; document.getElementById('wrongRepeatPassword').style.display="none"; } 
      else if(document.getElementById('password-repeat').value=="") { document.getElementById('wrongRepeatPassword').style.display="none"; document.getElementById('okRepeatPassword').style.display="none"; } 
      else { document.getElementById('okRepeatPassword').style.display="none"; document.getElementById('wrongRepeatPassword').style.display="inline"; } 
  }
  isUsedID = () => { }
  postBeAGuider = () => {
    let PostGuiderURL = `http://localhost:8080/guide/guide/add?birthday=${this.state.birthday.getFullYear()}-${this.state.birthday.getMonth()+1}-${this.state.birthday.getDate()}&city_id=${document.getElementById('guiderCity').value}&cost=20&country=${document.getElementById('guiderCountry').value}&description=none&email=${document.getElementById('guiderEmail').value}&experience=1&fullname=${document.getElementById('guiderUsername').value}&gender=male&guide_id=${parseInt(Math.random()*100)}&idCard=${document.getElementById('guideridcard').value}&image=fd&lock_status=0&password=${md5(document.getElementById('guiderPassword').value)}&phone=${document.getElementById('guiderPhone').value}&status=0&tour_sum=0&username=${document.getElementById('guiderUsername').value}`
    let Form = new FormData()
    Form.append('hinhanh', this.state.avatar)
    Form.append('birthday', `${this.state.birthday.getFullYear()}-${this.state.birthday.getMonth()+1}-${this.state.birthday.getDate()}`)
    axios.post(PostGuiderURL, Form).then((result) => console.log(result))
    window.location.href="/"
  }
  fileSelectedHandler = event => {
    let reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState == 2) {
        document.getElementsByClassName('previewAvatar')[0].innerHTML = `<img style="object-fit: cover;width: 100%;height: 100%; border-radius: 8px;" src=${reader.result}>`
      }
    }
    reader.readAsDataURL(event.target.files[0])
    this.setState({ avatar: event.target.files[0] })
  }
  languagesUpload = event => {
    console.log(event.target.files)
    this.setState({ languages: event.target.files })
  }
  render() {
    return (
      <div className="BeAGuiderPage">
        <div>
          <img style={{ objectFit: "cover", width: "100%", marginTop: "80%" }} src="https://easylanguageeasylife.com/wp-content/uploads/2019/10/kisspng-tour-guide-museum-clip-art-comic-book-guide-5a8264fe7a8fb6.268333341518494974502.png"></img>
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
              <label for="birthday"><b>Birthday</b></label>
              <DatePicker
                selected={this.state.birthday}
                dateFormat="dd-MM-yyyy"
                onChange={this.handleChange}
                selectsStart
                endDate={new Date("2000-12-29T17:00:00.000Z")}
              />
            </div>
            <div>
              <label for="Country">
                <b>Country</b>
              </label>
              <input type="text" placeholder="Enter Country" name="country" id="guiderCountry" required></input>
            </div>
            <div>
              <label for="Phone">
                <b>Phone</b>
              </label>
              <input type="number" placeholder="Enter Phone" name="City" id="guiderPhone" required></input>
            </div>
            <div>
              <label for="City">
                <b>City</b>
              </label>
              <input type="text" placeholder="Enter Country" name="City" id="guiderCity" required></input>
            </div>
            <div>
              <label for="idcard"><b>ID Card</b></label>
              <input type="number" placeholder="Enter ID" name="idcard" id="guideridcard" onChange={this.isUsedID} required></input>
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
          <img style={{ objectFit: "cover", width: "70%" }} src="./images/pngwave.png"></img>
        </div>
      </div>
    );
  }
}

export default BeAGuiderPage;