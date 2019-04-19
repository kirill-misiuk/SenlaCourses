import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUsers} from "../reducers/users";
import TodoList from './UsersList';

class App extends Component {
  render() {

    const {addUsers}=this.props;
    return (
      <div className="App">
        <button onClick={addUsers}>Add users</button>
        <TodoList />
      </div>
    );
  }
}

export default connect(null, {addUsers})(App);
