import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from "../reducers/users";
import Todo from './User';

class UsersList extends Component {

  render() {
    const {users} = this.props;

    return (
      <ul>
        {users.map((item) => (
          <Todo key={item.id} {...item} />
        ))}
      </ul>
    )
  }
}

export default connect(state => ({users: getUsers(state)}))(UsersList);
