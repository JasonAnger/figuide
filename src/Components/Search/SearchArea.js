import React, { useState } from 'react';
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './Search.css';

function SearchArea() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    let availableLocation = [
        { value: 'Vietnam', label: 'Vietnam' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Phillipines', label: 'Phillipines'},
        { value: 'Japan', label: 'Japan'},
        { value: 'Korea', label: 'Korea'}
    ]
    let availableLanguages = [
        { value: 'Vietnamese', label: 'Vietnamese' },
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French'},
        { value: 'Chinese', label: 'Chinese'},
        { value: 'Korean', label: 'Korean'},
        { value: 'Japanese', label: 'Japanese'}
    ]
    let availableGroupType = [
        { value: 'onlyMe', label: 'Only me' },
        { value: 'oneMore', label: 'with one more person' },
        { value: 'from2to3', label: '2-3 people'},
        { value: 'moreThan3', label: 'More than 3 people'}
    ]
    let selectStyles={
        option: (provided, state) => ({
          ...provided,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            border: "2px solid black", borderRadius: "8px",display: "flex"
          })
    }
    let searchRedirect = () => {
        if(document.getElementById('location').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML=="Select...") {

        } else {
            let target=`/results?location=${document.getElementById('location').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value) target+=`&&startDate=${document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value}`
            if(document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value 
            && document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value!=document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value) 
                target+=`&&endDate=${document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value}`
            if(document.getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') 
                target+=`&&language=${document.getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') {
                let typeGroup
                switch(document.getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML) {
                    case "Only me":
                        typeGroup="onlyMe"
                      break;
                    case "with one more person":
                        typeGroup="oneMore"
                      break;
                    case "2-3 people":
                        typeGroup="from2to3"
                      break;
                    case "More than 3 people":
                        typeGroup="moreThan3"
                      break;
                  }
                target+=`&&groupType=${typeGroup}`
            }
            window.location.href=target
        }
    }
    let applySearchRedirect = () => {
        if(document.getElementById('location').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML=="Select...") {

        } else {
            let target=`/results?location=${document.getElementById('location').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value) target+=`&&startDate=${document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value}`
            if(document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value 
            && document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value!=document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value) 
                target+=`&&endDate=${document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value}`
            if(document.getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') 
                target+=`&&language=${document.getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') {
                let typeGroup
                switch(document.getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML) {
                    case "Only me":
                        typeGroup="onlyMe"
                      break;
                    case "with one more person":
                        typeGroup="oneMore"
                      break;
                    case "2-3 people":
                        typeGroup="from2to3"
                      break;
                    case "More than 3 people":
                        typeGroup="moreThan3"
                      break;
                  }
                target+=`&&groupType=${typeGroup}`
            }
            window.location.href=target
        }
    }
    return (
            <div className="SearchBox">
                <h1>FIND YOUR TOUR GUIDE</h1>
                <form>
                    <div>
                        <label for="location"><b>Location</b></label>
                        <Select id="location" styles={selectStyles} options={availableLocation}/>
                    </div>
                    <div className="space"></div>
                    <div className="dateContainer">
                        <div>
                            <label for="startDate"><b>Start Date</b></label>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div>
                            <label for="endDate"><b>End Date</b></label>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="languagesDiv">
                        <label for="languages"><b>Languages</b></label>
                        <Select styles={selectStyles} options={availableLanguages}/>
                    </div>
                    <div className="groupTypeDiv">
                        <label for="groupType"><b>How many people are with you?</b></label>
                        <Select styles={selectStyles} options={availableGroupType}/>
                    </div>
                </form>
                <button className="searchResultsButton" onClick={searchRedirect}>Search</button>
                <button className="applySearchResultsButton" onClick={applySearchRedirect}>Apply</button>
            </div>
    );
}

export default SearchArea;
