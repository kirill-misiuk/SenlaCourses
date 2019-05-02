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
  const {todos, li, handleSubmitButton, handleDeleteTodo,handleDoneTodo, handleFavoriteTodo, handleFilterSearch, handleNavButtons} = props;
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

export default compose(
  pure,
  withState('todos', 'hadnleTodos', []),
  withState('li', 'handleLi', 'All'),
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
    handleNavButtons: ({handleLi}) => value => handleLi(value),
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
    handleFilterSearch: ({todos,handleLi,hadnleTodos})=>(value) =>{
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
      handleLi('Search');
      if(value===''){
        handleLi('All');
        hadnleTodos(a.map(t => ({...t, search: false})));
      }
    }

  })
)(App);
