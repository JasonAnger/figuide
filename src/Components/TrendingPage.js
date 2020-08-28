import React, { Component } from 'react';
import Guide from './TrendingPage/Guide'
import Place from './TrendingPage/Place'
import './TrendingPage/TrendingPage.css'

class TrendingPage extends Component {
  constructor() {
      super();
      this.state = { topGuide: [],topPlace: [] };
  }
  async componentDidMount() {
      const topGuide = await fetch(`http://localhost:8080/guide/guide/index?page=1`).then(res => res.json())
      const topPlace = await fetch(`http://localhost:8080/guide/place/country/Vietnam`).then(res => res.json())
      this.setState({ topGuide : topGuide });
      this.setState({ topPlace : topPlace})
  }
  render() {
      console.log(this.state)
      let topGuide = this.state.topGuide.map(item => <Guide item={item} />)
      let topPlace = this.state.topPlace.map(item => <Place item={item} />)
      return (
          <div className="TrendingPage">
              <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                  <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
                  <h1>OUR BEST PLACES TO GO</h1>
                  <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
              </div>
              <div style={{display: "flex"}}>
                  <div className="resultsTrendingContainer">{topPlace}</div>
              </div>
              <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                  <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
                  <h1>OUR BEST TOUR GUIDES</h1>
                  <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
              </div>
              <div style={{display: "flex"}}>
                  <div className="resultsTrendingContainer">{topGuide}</div>
              </div>
          </div>
      )
  }
}

export default TrendingPage;
