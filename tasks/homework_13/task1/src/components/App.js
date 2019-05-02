import React, {
  useCallback, useState, useEffect, memo
} from 'react';
import NewTask from './NewTask';
import talking from '../images/taking_notes.png';
import Nav from './Nav';
import TodoItem from './TodoItem';
import Header from './Header';

const App = () => {
  const [todos, updateTodos] = useState([]);
  const [filter, handleFilter] = useState('All');
  const handleSubmitButton = useCallback(value => updateTodos([value, ...todos]), [todos]);
  const handleDeleteTodo = useCallback(id => updateTodos(todos.filter(todo => todo.id !== id)),
    [todos]);
  const handleNavButtons = useCallback(value => handleFilter(value), [filter]);
  const handleDoneTodo = useCallback((id) => {
    const result = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });
    updateTodos(result);
  }, [todos]);
  const handleFavoriteTodo = useCallback((id) => {
    const result = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          favorite: !todo.favorite
        };
      }
      return todo;
    });
    updateTodos(result);
  }, [todos]);
  const handleFilterSearch = useCallback((value) => {
    const a = [...todos];
    const todoRes = a.map((t) => {
      let flag = false;
      (t.todo.indexOf(value) !== -1) ? flag = true : flag = false;
      return {
        ...t,
        search: flag
      };
    });
    updateTodos(todoRes);
    handleFilter('Search');
    if (value === '') {
      handleFilter('All');
      updateTodos(a.map(t => ({...t, search: false})));
    }
  }, [todos]);
  useEffect(() => {
    const cachedTodos = JSON.parse(localStorage.getItem(('todos')));
    if (updateTodos) {
      updateTodos(cachedTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  let liArr = [];
  if (filter === 'All') liArr = todos;
  if (filter === 'Active') liArr = todos.filter(value => !value.done);
  if (filter === 'Done') liArr = todos.filter(value => value.done);
  if (filter === 'Search') liArr = todos.filter(value => value.search);

  return (
    <div>
      <Header onSearch={handleFilterSearch} />
      <Nav todos={todos} nav={handleNavButtons} />
      <img id="taking-notes" src={talking} alt="talking-notes" />
      <NewTask onSubmit={handleSubmitButton} />
      <div id="list-container">
        <ul className="todo-list">
          {liArr.map(todo => (
            <TodoItem
              key={todo.id}
              favorite={todo.favorite}
              done={todo.done}
              toggleDeleteButton={handleDeleteTodo}
              toggleDoneButton={handleDoneTodo}
              toggleFavoriteButton={handleFavoriteTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(App);
