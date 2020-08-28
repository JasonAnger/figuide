import React, { Component } from 'react';

class User extends Component {
    userOptionClick = () => {
        if (document.getElementById('UserOptions')!=null) document.getElementById("UserOptions").style.display = "inline"
    }
    render() {
        return (
            <div className="User" onClick={this.userOptionClick()}>
                <img src="https://www.w3schools.com/w3images/avatar2.png"></img>
                <div>
                    <a href={`/${this.props.item.username}`}>{this.props.item.username}</a>
                    <div><a id="logout" href="/logout">Log out</a></div>
                </div>
            </div>
        )
    }
}

export default User;
