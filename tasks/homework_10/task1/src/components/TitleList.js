import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../reducers/posts";
import Title from './Title';

class TitleList extends Component {

  render() {
    const {users} = this.props;

    return (
      <ul>
        {users.map((item) => (
          <Title key={item.id} {...item} />
        ))}
      </ul>
    )
  }
}

export default connect(state => ({users: getPosts(state)}))(TitleList);
