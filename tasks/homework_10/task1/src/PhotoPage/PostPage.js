import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getPostById} from '../reducers/posts';
class PostPage extends PureComponent {
    render() {
        const {posts} = this.props;
        if (posts) {
            return (
                <div>
                    <h2>{posts.title}</h2>
                    <p>
                        {posts.body}
                    </p>
                </div>
            );
        }
        return null;
    }
}
export default connect((state, props) => {
    const {match: {params}} = props;
    return {
        posts: getPostById(state, params.id)
    };
})(PostPage);
