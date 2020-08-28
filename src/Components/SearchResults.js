import React, { Component } from 'react';
import './SearchResultsPage/SearchResults.css';
import TourGuide from './SearchResultsPage/TourGuide'
import FilterBox from './SearchResultsPage/FilterBox'

class SearchResults extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    async componentDidMount() {
        const response = await fetch(`http://localhost:8080/guide/guide/search${window.location.href.slice(window.location.href.indexOf("?"))}`);
        const json = await response.json();
        this.setState({ data: json });
    }
    render() {
        let fetchData = this.state.data//[{languages:['English','Chinese'],prize:[20,30,50]},{languages:['English'],prize:[20,30,50]},{languages:['Chinese'],prize:[20,30,50]},{languages:['Chinese','French']}]        
        console.log(`http://localhost:8080/guide/guide/search${window.location.href.slice(window.location.href.indexOf("?"))}`)
        let results = fetchData.map(item => <TourGuide item={item} />)
        return (
            <div className="SearchResults">
                <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
                    <h1>Your Tour Guides</h1>
                    <div style={{width: "20%", margin: "0px 10px 0px 10px"}}><div className="line"></div></div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="searchFilter">
                        <FilterBox />
                    </div>
                    <div className="resultsContainer">{results}</div>
                </div>
            </div>
        );
    }
}

export default SearchResults;
