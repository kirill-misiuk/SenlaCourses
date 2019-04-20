import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class Title extends Component {
  render() {
    const {id}=this.props;
    const {title}=this.props;
    return (
        <Link to={`/photos/${id}`}>
      <li className="hover-eff"  >{title}</li>
        </Link>
    )
  }
}
export default connect()(Title)
