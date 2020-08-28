import React, { Component } from 'react';

class Place extends Component {
    render() {
        return (
            <a href={`http://localhost:3000/results?city=${this.props.item.place_name}&country=Vi%E1%BB%87t%20Nam&endDate=2020-06-26&language=English&startDate=2020-06-26`}>
                <div className="trendingPlace" style={{ backgroundImage: `linear-gradient(to bottom, rgba(252, 252, 252, 0.1), rgba(0,0,0,0.9)),
    url(${this.props.item.image})`}} >
                    <div>{this.props.item.place_name.toUpperCase()}</div>
                </div>
            </a>
        )
    }
}

export default Place