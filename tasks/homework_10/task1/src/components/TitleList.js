import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../reducers/posts";
import Title from './Title';

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
export default connect(state => ({posts: getPosts(state)}))(TitleList);
