import React from 'react';
import '../index.css';
import Header from './Header'
import Footer from "./Footer";
import MainPage from "./MainPage";

const App = () => (
    <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
);
export default App;
