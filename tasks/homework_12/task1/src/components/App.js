import React from 'react';
import {
  compose, withState, withHandlers, pure,
  lifecycle
} from 'recompose';
import NewTask from './NewTask';
import talking from '../images/taking_notes.png';
import Nav from './Nav';
import TodoItem from './TodoItem';
import Header from './Header';

const App = (props) => {
  const {todos, filter, handleSubmitButton, handleDeleteTodo,handleDoneTodo, handleFavoriteTodo, handleFilterSearch, handleNavButtons} = props;
  let filterArr = [];
  if (filter === 'All') filterArr = todos;
  if (filter === 'Active') filterArr = todos.filter(value => !value.done);
  if (filter === 'Done') filterArr = todos.filter(value => value.done);
  if (filter === 'Search') filterArr = todos.filter(value => value.search);

  return (
      <div>
        <Header onSearch={handleFilterSearch} />
        <Nav todos={todos} nav={handleNavButtons} />
        <img id="taking-notes" src={talking} alt="talking-notes" />
        <NewTask onSubmit={handleSubmitButton} />
        <div id="list-container">
          <ul className="todo-list">
            {filterArr.map(todo => (
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

export default compose(
  pure,
  withState('todos', 'hadnleTodos', []),
  withState('filter', 'handleFilter', 'All'),
  lifecycle({
     componentDidMount() {
       const {hadnleTodos}=this.props;
       const cachedTodos = JSON.parse(localStorage.getItem(('todos')));
       if(hadnleTodos){
          hadnleTodos(cachedTodos)
        }},
     componentDidUpdate() {
       const{todos}=this.props;
       localStorage.setItem('todos',JSON.stringify(todos))
     }
   }),

  withHandlers({
    handleSubmitButton: ({todos,hadnleTodos}) => value => hadnleTodos([value, ...todos]),
    handleDeleteTodo: ({todos, hadnleTodos}) => (id) => {
      const result = todos.filter(todo => todo.id !== id);

      hadnleTodos(result);
    },
    handleNavButtons: ({handleFilter}) => value => handleFilter(value),
    handleDoneTodo: ({todos, hadnleTodos}) => (id) => {
      const result = todos.map((todo) => {
        if (todo.id === id)return {
          ...todo,
          done: !todo.done
        };
        return todo
      });
      hadnleTodos(result);
    },
    handleFavoriteTodo:({todos,hadnleTodos}) => (id) =>{
      let result= todos.map((todo) => {
        if (todo.id === id) return {
          ...todo,
          favorite: !todo.favorite
        };
        return todo
      });
      hadnleTodos(result);
    },
    handleFilterSearch: ({todos,handleFilter,hadnleTodos})=>(value) =>{
      const a = [...todos];
      let todoRes=a.map((t) => {
        let flag = false;
        (t.todo.indexOf(value) !== -1) ? flag = true : flag = false;
        return {
          ...t,
          search: flag
        };
      });
      hadnleTodos(todoRes);
      handleFilter('Search');
      if(value===''){
        handleFilter('All');
        hadnleTodos(a.map(t => ({...t, search: false})));
      }
    }

  })
)(App);
