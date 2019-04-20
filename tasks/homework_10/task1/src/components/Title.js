import React, {Component} from 'react';
import {connect} from "react-redux";


class Title extends Component {


  render() {
    const {title} = this.props;

    return (
      <li className="hover-eff"  >{title}</li>
    )
  }
}

export default connect()(Title)
