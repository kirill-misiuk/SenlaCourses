import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import {getUpdateTodos, getTodos, getPokemons} from '../reducers/items';
import { getFruits} from '../reducers/fruits';

class TodoList extends Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps.todos === this.props.todos);
  }

  render() {
  console.log('TodoList')
  const {todos, fruits} = this.props;

    return (
      <div>
        <div>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </div>
        <div>
          {fruits.map((fruit, i) => <p key={i}>{fruit}</p>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('call mapStateToProps');
  return {
    todos: getUpdateTodos(state),
    // todos: getTodos(state),
    fruits: getFruits(state)
  }
};

export default connect(mapStateToProps)(TodoList);
