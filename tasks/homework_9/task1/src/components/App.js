import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUsers} from "../reducers/users";
import UserList from './UsersList';

class App extends Component {
  render() {

    const {addUsers}=this.props;
    return (
      <div className="App">
        <button onClick={addUsers}>Add users</button>
        <UserList />
      </div>
    );
  }
}

export default connect(null, {addUsers})(App);
