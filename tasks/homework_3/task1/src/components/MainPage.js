import React from 'react'
import imgCat from '../img/icat.jpg'
import imgDog from '../img/idog.jpeg'
import PropTypes from 'prop-types';
const MainPage = ({name, isCat, isGoodWeather}) => (
    <div id="page-content">
        <div id="inner-content">
            <h1>My name is {name}</h1>
        </div>
        <div id="inner-content">
            <img src={isCat ? imgCat : imgDog} alt="this is image"/>
        </div>
        <div id="inner-content">
            {isGoodWeather && <h2>Weather is fine today</h2>}

        </div>
    </div>

);
MainPage.propTypes = {
    name: PropTypes.string,
    isCat:PropTypes.bool,
    isDog:PropTypes.bool
};
export default MainPage

