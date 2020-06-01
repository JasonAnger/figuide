import React from 'react';
import './TourGuide.css';

function TourGuide(props) {
    let language = props.item.languages.map(item => <img style={{height: "24px",width: "24px",borderRadius: 0, marginRight:'5px'}} src={`./languages/${item}.png`} ></img>)
    return (
        <div className="TourGuide">
            <img src={props.item.avatar?props.item.avatar:'./images/avatar.jpg'}></img>
            <div className="tourGuideInformation">
                <div className="tourGuideName">{props.item.name?props.item.name:"Là tên đó"}</div>
                <div>Homeland: {props.item.homeland?props.item.homeland:"Là quê đó"}</div>
                <div>Languages: {language}</div>
                <div className="startingAt">Starting at <b>${props.item.prize[0]}</b></div>
            </div>
        </div>
    );
}

export default TourGuide;
