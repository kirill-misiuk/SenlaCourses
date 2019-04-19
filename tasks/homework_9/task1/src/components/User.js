import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteUsers} from "../reducers/users";

class User extends Component {

  handleDelete = () => {
    const {deleteUsers, id} = this.props;
    deleteUsers(id);
  };

  render() {
    const {name} = this.props;

    return (
      <li className="hover-eff" onClick={this.handleDelete} >{name}</li>
    )
  }
}

export default connect(null, {deleteUsers})(User)
