const initialState = {
  fruits: ['mango', 'apple', 'orange']
};

// Reducer
const fruits = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return {
        ...state,
        fruits: [...state.fruits, action.payload]
      }
    default:
      return state;
  }
};

// actions

const addFruit = () => ({
  type: 'ADD_FRUIT',
  payload: 'kokos'
});

const getFruits = state => state.fruits.fruits

export default fruits;

export {
  addFruit,
  getFruits
}