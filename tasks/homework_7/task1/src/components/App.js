import React from 'react';
import '../index.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './MainPage'
import Navigation from './Navigation'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation/>
                    <Switch>
                        <Route path="/" component={MainPage} exact/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App

