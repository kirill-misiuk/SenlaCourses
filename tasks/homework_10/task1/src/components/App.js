import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPosts} from "../reducers/posts";
import TitleList from './TitleList';

class App extends Component {
    componentDidMount() {
        const {addPosts} = this.props;
        addPosts();
    }
  render() {
    return (
      <div className="App">
        <TitleList />
      </div>
    );
  }
}

export default connect(null, {addPosts})(App);
