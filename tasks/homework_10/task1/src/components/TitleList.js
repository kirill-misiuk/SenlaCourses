import React, {Component} from 'react';
import {connect} from 'react-redux';
import Title from './Title';
import {selectPosts} from '../reducers/posts';

class TitleList extends Component {
    render() {
        const {posts} = this.props;

        return (
            <ul>
                {posts.map((item) => (
                    <Title key={item.id} {...item} />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    posts: selectPosts(state)
});
export default connect(mapStateToProps)(TitleList);
