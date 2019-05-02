import React, {
  useCallback, useState, useEffect, memo
} from 'react';
import NewTask from './NewTask';
import talking from '../images/taking_notes.png';
import Nav from './Nav';
import TodoItem from './TodoItem';
import Header from './header';

const App = () => {
  const [todos, updateTodos] = useState([]);
  const [li, handleLi] = useState('All');
  const handleSubmitButton = useCallback(value => updateTodos([value, ...todos]), [todos]);
  const handleDeleteTodo = useCallback(id => updateTodos(todos.filter(todo => todo.id !== id)),
    [todos]);
  const handleNavButtons = useCallback(value => handleLi(value), [li]);
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
    handleLi('Search');
    if (value === '') {
      handleLi('All');
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
  if (li === 'All') liArr = todos;
  if (li === 'Active') liArr = todos.filter(value => !value.done);
  if (li === 'Done') liArr = todos.filter(value => value.done);
  if (li === 'Search') liArr = todos.filter(value => value.search);

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
