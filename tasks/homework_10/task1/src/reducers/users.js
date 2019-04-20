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

        default:
            return state;
    }


};

const addUsers = () => (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((result) => dispatch({
            type: 'ADD_USERS',
            payload: result
        }))
};



const getUsers = state => state.users.users;

export default users
export {
    // actions
    addUsers,
    getUsers,

    // selectors

}