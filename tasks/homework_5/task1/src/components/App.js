import React from 'react';
import '../index.css';
import Header from './Header'
import Footer from "./Footer";
import MainPage from "./MainPage";



class App extends React.Component {
    state = {
        fruits: ['banana', 'lemon', 'apple']
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({fruits: ['banana', 'lemon', 'apple']})
        }, 5000);

    }

    render() {

        console.log('************Parent App************');
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

