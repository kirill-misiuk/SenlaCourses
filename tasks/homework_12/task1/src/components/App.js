import React from 'react';
import {
  compose, withState, withHandlers, pure,
  lifecycle
} from 'recompose';
import NewTask from './NewTask';
import talking from '../images/taking_notes.png';
import Nav from './Nav';
import TodoItem from './TodoItem';
import Header from './header';

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
    saveStateToLocalStorage() {
      for (const key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    },

    hydrateStateWithLocalStorage() {
      for (const key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            this.setState({[key]: value});
          } catch (e) {
            this.setState({[key]: value});
          }
        }
      }
    },
    componentDidMount() {
      this.hydrateStateWithLocalStorage();
      window.addEventListener(
        'beforeunload',
        this.saveStateToLocalStorage.bind(this)
      );
    },

    componentWillUnmount() {
      window.removeEventListener(
        'beforeunload',
        this.saveStateToLocalStorage.bind(this)
      );
      this.saveStateToLocalStorage();
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
        let done = todo.done;
        if (todo.id === id) done = !todo.done;
        return {
          ...todo,
          done
        };
      });
      hadnleTodos(result);
    },
    handleFavoriteTodo:({todos,hadnleTodos}) => (id) =>{
      let result= todos.map((todo) => {
        let favorite = todo.favorite;
        if (todo.id === id) favorite = !todo.favorite;
        return {
          ...todo,
          favorite
        };
      });
      hadnleTodos(result);
    }

  })
)(App);


// handleFilterSearch = (value) => {
//   const {todos} = this.state;
//   const a = [...todos];
//   this.setState({
//     todos: a.map((t) => {
//       let flag = false;
//       (t.todo.indexOf(value) !== -1) ? flag = true : flag = false;
//       return {
//         ...t,
//         search: flag
//       };
//     })
//   });
//   this.setState({tab: 'Search'});
//   if (value === '') {
//     this.setState({todos: a.map(t => ({...t, search: false}))});
//     this.setState({tab: 'All'});
//   }
//
//   this.setState({li: 'Search'});
//   if (value === '') {
//     this.setState({todos: a.map(t => ({...t, search: false}))});
//     this.setState({li: 'All'});
//   }
// };
//
