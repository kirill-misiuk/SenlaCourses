import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUsers} from "../reducers/users";
import UserList from './UsersList';

class App extends Component {
    componentDidMount() {
        const {addUsers} = this.props;
        addUsers();
    }
  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    );
  }
}

export default connect(null, {addUsers})(App);
