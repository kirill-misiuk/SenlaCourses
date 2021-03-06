const initialstate = {
    posts: []
};
const posts = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state;
    }
};
const addPosts = () => (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((result) => dispatch({
            type: 'ADD_TITLE',
            payload: result
        }))
};
const getState = state => state.posts;
const selectPosts = state => getState(state).posts;
const getPostById = (state, id) => getState(state).posts.find(photo => photo.id === +id);

export default posts
export {
    // actions
    addPosts,
    // selectors
    getPostById,
    selectPosts
}