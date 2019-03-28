import React from 'react';
import '../index.css';
import Header from './Header'
import Footer from "./Footer";
import MainPage from "./MainPage";

class App extends React.Component {
    render() {
        return (

            <div className="App">
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        );
    }
}

export default App

