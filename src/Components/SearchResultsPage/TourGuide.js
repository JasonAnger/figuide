import React, { Component } from 'react';
import './TourGuide.css';

class TourGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
        };
    }
    render() {
        console.log(this.state.item)
        let tags = this.state.item.tags?this.state.item.tags.map(item => <div className="label">{item}</div>):['tourguide','guider','tour'].map(item => <div className="label">{item}</div>)
        let languages = this.state.item.languages?this.state.item.languages.map(item => <img style={{height: "24px",width: "24px",borderRadius: 0, marginRight:'5px'}} src={`./languages/${item}.png`} ></img>):
        (['English']).map(item => <img style={{ height: "24px", width: "24px", borderRadius: 0, marginRight: '5px'}} src={`./languages/${item}.png`} ></img>)
        let birthday = this.state.item.birthday
        let stars = []
        for(let i=1; i<=5; i++) {
            if((this.state.item.rating?this.state.item.rating:4.5)-i>=0)
                stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/star.svg"></img>)
            else stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/favourite.svg"></img>)
        }
        return (
            <div className="TourGuide">
                <img src={(this.state.item.image!=="")?'./images/avatar.jpg':`http://localhost:8080/guide/images/${this.state.item.image}`}></img>
                <div className="tourGuideInformation">
                    <div className="tourGuideName"><b><a href={`/${this.state.item.username?this.state.item.username:"unknown"}`}>{this.state.item.username?this.state.item.username:"Tên gọi thôi"}</a></b></div>
                    <div className="fullName"><b>Full name: </b>{this.state.item.fullname?this.state.item.fullname:"Tên thiệt tên đầy đủ nè"}</div>
                    <div><b>Homeland: </b>{this.state.item.country?this.state.item.country:"Là quê đó"}</div>
                    <div><b>Languages: </b> {languages}</div>
                    <div><b>Gender: </b> {this.state.item.gender=="Male"?"Male":"Female"}</div>
                    <div><b>Age: </b>{(new Date()).getYear()-(new Date(birthday)).getYear()}</div>
                    <div><b>Experience: </b>{this.state.item.experience?this.state.item.experience:"Nhiều kinh nghiệm"}</div>
                    <div style={{display: "flex"}}> {tags}</div>
                    <div style={{display: "flex", width:"100%"}}>
                    </div>
                </div>
                <div className="chooseOrNot">
                    <div className="rating"><b>Rating: </b>{this.state.item.rating?this.state.item.rating:4.5} {stars}</div>
                    <div className="startingAt">Starting at <b>${this.state.item.cost?this.state.item.cost:"30$"}</b></div>
                    <div className="moreInfo"><a href={`/${this.state.item.username?this.state.item.username:"unknown"}`}>More Info</a></div>
                    <button className="bookButton">BOOK</button>
                </div>
            </div>
        );
    }
}

export default TourGuide;
