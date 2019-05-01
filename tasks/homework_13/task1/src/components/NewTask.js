import React, {useCallback, useState, memo} from 'react';
import PropTypes from 'prop-types';
import guid from '../utils';

const MainPage = ({onSubmit}) => {
  const [todo, handleTodo] = useState('');
  const handleChangeInput = useCallback((e) => {
    handleTodo(e.target.value);
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const result = {
      id: guid(),
      todo,
      done: false,
      favorite: false,
      search: false
    };
    onSubmit(result);
    handleTodo('');
  }, [todo, onSubmit]);
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
MainPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
export default memo(MainPage);
