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



const getPosts = state => state.posts.posts;

export default posts
export {
    // actions
    addPosts,
    getPosts,

    // selectors

}