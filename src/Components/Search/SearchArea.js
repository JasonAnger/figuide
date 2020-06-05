import React, { useState } from 'react';
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './Search.css';

function SearchArea() {
    let windowHref = window.location.href
    let hrefLocation = {
        country: "",
        city: "",
        startDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        language: "",
        groupType: ""
    }
    const today = new Date()
    if(windowHref.indexOf("location")) {
        let country=windowHref.slice(windowHref.indexOf('country=')+"country=".length,windowHref.indexOf('&&'))
        hrefLocation.country = country
        hrefLocation.city = windowHref.slice(windowHref.indexOf('city=')).slice("city=".length,windowHref.slice(windowHref.indexOf('city=')).indexOf('&&'))
        if(windowHref.indexOf("startDate")) { 
            let startDate=windowHref.slice(windowHref.indexOf('startDate=')).slice("startDate=".length,windowHref.slice(windowHref.indexOf('startDate=')).indexOf('&&'))
            hrefLocation.startDate = startDate.slice(3,5) + "/" + startDate.slice(0,2)  + "/" + startDate.slice(6)
        }
        if(windowHref.indexOf("endDate")!=-1) { 
            let endDate=windowHref.slice(windowHref.indexOf('endDate=')).slice("endDate=".length,windowHref.slice(windowHref.indexOf('endDate=')).indexOf('&&'))
            hrefLocation.endDate = endDate.slice(3,5) + "/" + endDate.slice(0,2)  + "/" + endDate.slice(6) 
        }
        else hrefLocation.endDate = hrefLocation.startDate
        let language
        if(windowHref.indexOf("language=")) language=windowHref.slice(windowHref.indexOf('language=')).slice("language=".length,windowHref.slice(windowHref.indexOf('language=')).indexOf('&&'))
        else language=windowHref.slice(windowHref.indexOf('language=')+"language=".length)
        hrefLocation.language = language
        let groupType
        if(windowHref.indexOf("groupType=")) groupType=windowHref.slice(windowHref.indexOf('groupType=')+'groupType='.length)
        hrefLocation.groupType = groupType
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    let availableCountry = [
        { value: 'Vietnam', label: 'Vietnam' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Phillipines', label: 'Phillipines'},
        { value: 'Japan', label: 'Japan'},
        { value: 'Korea', label: 'Korea'}
    ]
    let availabelCity = [
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
        if(document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML=="Select...") {

        } else {
            let target=`/results?country=${document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementsByClassName('dataCity')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML!="Select...")
                target+=`&&city=${document.getElementsByClassName('dataCity')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
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
        if(document.getElementById('FilterBox').getElementsByClassName('dataCountry')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML=="Select...") {

        } else {
            let target=`/results?country=${document.getElementById('FilterBox').getElementsByClassName('dataCountry')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementById('FilterBox').getElementsByClassName('dataCity')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML!="Select...")
                target+=`&&city=${document.getElementById('FilterBox').getElementsByClassName('dataCity')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementById('FilterBox').getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value) 
                target+=`&&startDate=${document.getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value}`
            if(document.getElementById('FilterBox').getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value 
            && document.getElementById('FilterBox').getElementsByClassName('react-datepicker__input-container')[0].getElementsByTagName('input')[0].value!=document.getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value) 
                target+=`&&endDate=${document.getElementById('FilterBox').getElementsByClassName('react-datepicker__input-container')[1].getElementsByTagName('input')[0].value}`
            if(document.getElementById('FilterBox').getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') 
                target+=`&&language=${document.getElementById('FilterBox').getElementsByClassName('languagesDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML}`
            if(document.getElementById('FilterBox').getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML!='Select...') {
                let typeGroup
                switch(document.getElementById('FilterBox').getElementsByClassName('groupTypeDiv')[0].getElementsByClassName('css-g1d714-ValueContainer')[0].getElementsByTagName('div')[0].innerHTML) {
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
                    <div className="dataCountry">
                        <label for="country"><b>Country</b></label>
                        <Select id="country" defaultValue={availableCountry.filter(item => item.value==hrefLocation.country)} styles={selectStyles} options={availableCountry}/>
                    </div>
                    <div className="dataCity">
                        <label for="city"><b>City</b></label>
                        <Select id="city" defaultValue={availabelCity.filter(item => item.value==hrefLocation.city)} styles={selectStyles} options={availabelCity}/>
                    </div>
                    <div className="space"></div>
                    <div className="dateContainer">
                        <div>
                            <label for="startDate"><b>Start Date</b></label>
                            <DatePicker
                                selected={startDate}
                                onChange={date => {setStartDate(date); setEndDate(date)}}
                                dateFormat="dd/MM/yyyy"
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={today}
                            />
                        </div>
                        <div>
                            <label for="endDate"><b>End Date</b></label>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="languagesDiv">
                        <label for="languages"><b>Languages</b></label>
                        <Select defaultValue={availableLanguages.filter(item => item.value==hrefLocation.language)} styles={selectStyles} options={availableLanguages}/>
                    </div>
                    <div className="groupTypeDiv">
                        <label for="groupType"><b>How many people are with you?</b></label>
                        <Select defaultValue={availableGroupType.filter(item => item.value==hrefLocation.groupType)} styles={selectStyles} options={availableGroupType}/>
                    </div>
                </form>
                <button className="searchResultsButton" onClick={searchRedirect}>Search</button>
                <button className="applySearchResultsButton" onClick={applySearchRedirect}>Apply</button>
            </div>
        )
}

export default SearchArea;
