import React from 'react';
import {compose,withState,withHandlers} from 'recompose'
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
    handleChangeInput: props => (e) => {
      const {handleTodo} = props;
      handleTodo(e.target.value);
    },

    handleSubmit: props => (e) => {
      e.preventDefault();
      const {onSubmit, todo,handleTodo} = props;
      const result = {
        id: guid(),
        todo,
        done: false,
        favorite: false,
        search: false
      };

      onSubmit(result);
      handleTodo('');
    }
  })
)(MainPage);
