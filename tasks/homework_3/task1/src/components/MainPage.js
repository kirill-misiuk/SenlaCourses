import React from 'react'
import imgCat from '../img/icat.jpg'
import imgDog from '../img/idog.jpeg'

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
export default MainPage

