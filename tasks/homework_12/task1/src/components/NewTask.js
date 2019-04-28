import React from 'react';
import {compose,withState,withHandlers} from 'recompose'
import PropTypes from 'prop-types';
import guid from '../utils';

const MainPage = (props) => {
  const {todo, handleChangeInput, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} id="task">
      <h1 id="text">New Task</h1>
      <input
        value={todo}
        type="text"
        name="todo"
        id="input"
        onChange={handleChangeInput}
        maxLength="100"
      />
      <button className="add-btn" type="submit" disabled={todo.length === 0}>add</button>
    </form>
  );
};

export default compose(
  withState('todo', 'handleTodo', ''),
  withHandlers({
    handleChangeInput: () => () => 0,

    handleSubmit: () => () => 0
  })
)(MainPage);
// handleChangeInput = e => this.setState({[e.target.name]: e.target.value});
//
// handleSubmit = (e) => {
//   e.preventDefault();
//   const {onSubmit} = this.props;
//   const {todo} = this.state;
//   const result = {
//     id: guid(),
//     todo,
//     done: false,
//     favorite: false,
//     search: false
//   };
//   onSubmit(result);
//   this.setState({todo: ''});
// };
