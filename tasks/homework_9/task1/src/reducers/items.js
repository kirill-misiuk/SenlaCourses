import {createSelector} from 'reselect'

const initialState = {
  todos: [],
  pokemons: []
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'LOAD_USERS':
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload]
      }
    default:
      return state;
  }
};


// Action creator
const addTodo = (value) => ({
  type: 'ADD_TODO',
  payload: value
});

const loadPokemon = (id) => (dispatch, getState) => {
  fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((res) => res.json())
    .then((result) => dispatch({
      type: 'LOAD_USERS',
      payload: result
    }))  
}

const getTodos = (state) => {
  return state.todos.todos;
}



const getUpdateTodos = createSelector([getTodos], (todos) =>
  todos.map((item) => {
    return {...item, text: item.text.toUpperCase()}
  })
);

const getPokemons = state => state.todos.pokemos;

export default todos;

export {
  // actions
  addTodo,
  loadPokemon,

  // selectors
  getTodos,
  getPokemons,
  getUpdateTodos
};
