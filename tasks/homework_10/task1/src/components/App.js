import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPosts} from "../reducers/posts";
import TitleList from './TitleList';
import PhotoPage from '../PhotoPage'
import {
    BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        const {addPosts} = this.props;
        addPosts();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path='/' component={TitleList} exact/>
                        <Route path="/photos/:id" component={PhotoPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, {addPosts})(App);
