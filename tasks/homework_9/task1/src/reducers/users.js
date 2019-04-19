const initialstate = {
    users: []
};

const users = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }


};

const addUsers = () => (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((result) => dispatch({
            type: 'ADD_USERS',
            payload: result
        }))
};

const deleteUsers = (value) => ({
    type: 'DELETE_USER',
    payload: value
});

const getUsers = state => state.users.users;

export default users
export {
    // actions
    addUsers,
    getUsers,

    // selectors
    deleteUsers
}