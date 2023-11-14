import React from 'react';
import './topbar.css';
import search from '../../assets/search.png';
import filter from "../../assets/filter.png"

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarleft">LOGO</div>
            <div className="topbarmiddle">
                <div className='searchbox'>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Search here...' />
                </div>
                <div className="filterbox">
                    <img src={filter} alt="filter" />
                    <div>Filters</div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
