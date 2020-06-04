import React, { useState } from 'react';
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './Search.css';
import SearchArea from './SearchArea';

function Search() {
    let hideSearch = () => {
        document.getElementById('SearchContainer').style.display="none"
        if(document.getElementById('FilterBox')!=null) document.getElementById('FilterBox').style.display="block"
    }
    return (
        <div id="SearchContainer">
            <div className="clickHide" onClick={hideSearch}>
            </div>
            <SearchArea />
        </div>
    );
}

export default Search;
