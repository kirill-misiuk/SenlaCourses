import React, {useCallback, useState, memo} from 'react';
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
      let {done} = todo.done;
      if (todo.id === id) done = !todo.done;
      return {
        ...todo,
        done
      };
    });
    updateTodos(result);
  }, [todos]);
  const handleFavoriteTodo = useCallback((id) => {
    const result = todos.map((todo) => {
      let {favorite} = todo.favorite;
      if (todo.id === id) favorite = !todo.favorite;
      return {
        ...todo,
        favorite
      };
    });
    updateTodos(result);
  },[todos]);
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
    if (value === ''){
      handleLi('All');
      updateTodos(a.map(t => ({...t, search: false})));
    }
  }, [todos]);
  //  lifecycle({
  //    componentDidMount() {
  //      const {hadnleTodos} = this.props;
  //      const cachedTodos = JSON.parse(localStorage.getItem(('todos')));
  //      if (hadnleTodos){
  //        hadnleTodos(cachedTodos);
  //      }
  //    },
  //    componentDidUpdate() {
  //      const {todos} = this.props;
  //      localStorage.setItem('todos',JSON.stringify(todos))
  //    }
  //  })
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
