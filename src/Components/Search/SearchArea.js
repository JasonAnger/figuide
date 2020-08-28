import React, { useState } from 'react';
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './Search.css';

class SearchArea extends React.Component {
    state = {
        windowHref: window.location.href, 
        country: "",
        city: "",
        startDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        language: "",
        groupType: "",
        startDate: new Date(),
        endDate: new Date(),
        availableCountry: [
            { value: 'Vietnam', label: 'Vietnam' },
            { value: 'Thailand', label: 'Thailand' },
            { value: 'Phillipines', label: 'Phillipines' },
            { value: 'Japan', label: 'Japan' },
            { value: 'Korea', label: 'Korea' }
        ],
        availabelCity: [],
        availableLanguages: [
            { value: 'Vietnamese', label: 'Vietnamese' },
            { value: 'English', label: 'English' },
            { value: 'French', label: 'French' },
            { value: 'Chinese', label: 'Chinese' },
            { value: 'Korean', label: 'Korean' },
            { value: 'Japanese', label: 'Japanese' }
        ],
        availableGroupType: [
            { value: 'onlyMe', label: 'Only me' },
            { value: 'oneMore', label: 'with one more person' },
            { value: 'from2to3', label: '2-3 people' },
            { value: 'moreThan3', label: 'More than 3 people' }
        ]
    };
    setStartDate = date => {
        this.setState({
            startDate: date
        });
    };
    setEndDate = date => {
        this.setState({
            endDate: date
        });
    };
    selectStyles = {
        option: (provided, state) => ({
            ...provided,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            border: "2px solid black", borderRadius: "8px", display: "flex"
        })
    }
    searchRedirect = async () => {
        window.location.href=`http://localhost:3000/results?city=${this.state.city}&country=${this.state.country=="Vietnam"?"Việt Nam":this.state.country}&endDate=${this.state.endDate.getFullYear()}-${this.state.endDate.getMonth()+1}-${this.state.endDate.getDate()}&language=${this.state.language==""?"English":this.state.language}&startDate=${this.state.startDate.getFullYear()}-${this.state.startDate.getMonth()+1}-${this.state.startDate.getDate()}`
    }
    onChangeCountry = async (selectedCountry) => {
        this.setState({country: selectedCountry.value})
        if(selectedCountry.value=="Vietnam") fetch('http://localhost:8080/guide/place/country/Vietnam').then(res => res.json()).then(data => this.setState({availabelCity : data.map(item => item = { value: item.place_name, label: item.place_name })}))
        else this.setState({availabelCity : []})
    }
    onChangeLanguage = async (selectedLanguage) => {
        this.setState({language: selectedLanguage.value})  
    }
    onChangeGroupType = async (selectedGroupType) => {
        this.setState({groupType: selectedGroupType.value})  
    }
    onChangeCity = async (selectedCity) => {
        this.setState({city: selectedCity.value})  
    }
    render() {
        const { selectedCountry,selectedLanguage,selectedGroupType,selectedCity } = this.state;
        return (
            <div className="SearchBox">
                <h1>FIND YOUR TOUR GUIDE</h1>
                <form>
                    <div className="dataCountry">
                        <label for="country"><b>Country</b></label>
                        <Select value={selectedCountry} onChange={this.onChangeCountry} id="country" styles={this.selectStyles} options={this.state.availableCountry} />
                    </div>
                    <div className="dataCity">
                        <label for="city"><b>City</b></label>
                        <Select value={selectedCity} onChange={this.onChangeCity} id="city" styles={this.selectStyles} options={this.state.availabelCity} />
                    </div>
                    <div className="space"></div>
                    <div className="dateContainer">
                        <div>
                            <label for="startDate"><b>Start Date</b></label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={date => { this.setStartDate(date); this.setEndDate(date) }}
                                dateFormat="dd-MM-yyyy"
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                minDate={new Date()}
                            />
                        </div>
                        <div>
                            <label for="endDate"><b>End Date</b></label>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={date => this.setEndDate(date)}
                                dateFormat="dd-MM-yyyy"
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                minDate={this.state.startDate}
                            />
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="languagesDiv">
                        <label for="languages"><b>Languages</b></label>
                        <Select value={selectedLanguage} onChange={this.onChangeLanguage} styles={this.selectStyles} options={this.state.availableLanguages} />
                    </div>
                    <div className="groupTypeDiv">
                        <label for="groupType"><b>How many people are with you?</b></label>
                        <Select value={selectedGroupType} onChange={this.onChangeGroupType} styles={this.selectStyles} options={this.state.availableGroupType} />
                    </div>
                </form>
                <button className="searchResultsButton" onClick={this.searchRedirect}>Search</button>
                <button className="applySearchResultsButton" onClick={this.searchRedirect}>Apply</button>
            </div>
        )
    }
}

export default SearchArea;
