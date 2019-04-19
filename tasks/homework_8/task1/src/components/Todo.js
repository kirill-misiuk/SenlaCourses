import React, { Component } from 'react';
import {deleteTodo} from '../actions'
import {connect} from "react-redux";

class Todo extends Component {
  handleDeleteButton = () => {
    const {id} = this.props;
    this.props.dispatch(deleteTodo(id));
  };
  render() {

    const { text } = this.props;
    return (
        <div>
      <p>{text}</p>
<button onClick={this.handleDeleteButton}>X</button>
        </div>
    )
  }
}

export default connect(deleteTodo(id))(Todo)