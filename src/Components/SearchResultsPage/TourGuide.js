import React from 'react';
import './TourGuide.css';

function TourGuide(props) {
    let tags = props.item.tags?props.item.tags.map(item => <div className="label">{item}</div>):['tourguide','guider','tour'].map(item => <div className="label">{item}</div>)
    let languages = props.item.languages.map(item => <img style={{height: "24px",width: "24px",borderRadius: 0, marginRight:'5px'}} src={`./languages/${item}.png`} ></img>)
    let stars = []
    for(let i=1; i<=5; i++) {
        if((props.item.rating?props.item.rating:4.5)-i>=0)
            stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/star.svg"></img>)
        else stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/favourite.svg"></img>)
    }
    return (
        <div className="TourGuide">
            <img src={props.item.avatar?props.item.avatar:'./images/avatar.jpg'}></img>
            <div className="tourGuideInformation">
                <div className="tourGuideName"><b>{props.item.name?props.item.name:"Tên gọi thôi"}</b></div>
                <div className="fullName"><b>Full name: </b>{props.item.fullName?props.item.fullName:"Tên thiệt tên đầy đủ nè"}</div>
                <div><b>Homeland: </b>{props.item.homeland?props.item.homeland:"Là quê đó"}</div>
                <div><b>Languages: </b> {languages}</div>
                <div><b>Experience: </b>{props.item.experience?props.item.experience:"Nhiều kinh nghiệm"}</div>
                <div style={{display: "flex"}}> {tags}</div>
                <div style={{display: "flex", width:"100%"}}>
                    
                    
                </div>
            </div>
            <div className="chooseOrNot">
                <div className="rating"><b>Rating: </b>{props.item.rating?props.item.rating:4.5} {stars}</div>
                <div className="startingAt">Starting at <b>${props.item.prize?props.item.prize[0]:"30$"}</b></div>
                <button className="bookButton">BOOK</button>
            </div>
        </div>
    );
}

export default TourGuide;
