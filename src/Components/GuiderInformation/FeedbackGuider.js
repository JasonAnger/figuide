import React from 'react';
import './FeedbackGuider.css';

function FeedbackGuider(props) {
    let likeClick = () => {
        if(props.item.likeNumber) {
            props.item.likeNumber++
        } else props.item.likeNumber=201
        document.getElementsByClassName('likeNumber')[0].innerText=`${props.item.likeNumber}`
    }
    let stars = []
    for(let i=1; i<=5; i++) {
        if((props.item.rating?props.item.rating:4.5)-i>=0)
            stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/star.svg"></img>)
        else stars.push(<img style={{height: "20px",width: "20px",borderRadius:0}} src="./images/favourite.svg"></img>)
      }
    return(
        <div className="FeedbackGuider">
            <img src={props.item.avatar?props.item.avatar:'./images/avatar.jpg'}></img>
            <div className="FeedbackDetail">
                <div className="touristName"><b>{props.item.username}</b></div>
                <div className="bookingPlace"><b>Booking Place: </b>{props.item.place}</div>
                <div className="feedbackDescription">{props.item.description}</div>
            </div>
            <div>
                <div className="rating"><b style={{fontWeight:'bolder',padding:'0 5px'}}>{props.item.rating ? props.item.rating : 4.5}</b> {stars}</div>
                <div><b>Reliability: </b>{props.item.userReliability?props.item.userReliability:'High'}</div>
                <div><b>Like: </b><b className="likeNumber">{props.item.likeNumber?props.item.likeNumber:200}</b></div>
                <button onClick={likeClick}>Like</button>
            </div>
        </div>
    )
}

export default FeedbackGuider;