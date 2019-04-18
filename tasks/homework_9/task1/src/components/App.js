import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import {loadPokemon} from '../reducers/items';
import {addFruit} from '../reducers/fruits';
import './App.css';

class App extends Component {
  state = {
    pokemonId: 15
  }
  handleClick = () => {
    const {pokemonId} = this.state;
    const {loadPokemon} = this.props;
    loadPokemon(pokemonId);

    this.setState(({pokemonId}) => ({pokemonId: pokemonId + 1}))
  }

  render() {
    const {addFruit} = this.props;
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
        <button onClick={this.handleClick}>Load</button>

        <div>
          <button onClick={addFruit}>Add fruit</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {addFruit, loadPokemon})(App);
