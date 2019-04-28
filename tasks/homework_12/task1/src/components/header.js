import React from 'react';
import logo from '../images/logo.png';
import {compose,pure,withState,withHandlers} from 'recompose';
const  Header = (props) => {
    const {search, handleChangeInput}=props;
    return (

      <header id="page-header">
        <div>
          <img id="logo" src={logo} alt='logo'/>
        </div>

        <input
          id="form-input"
          value={search}
          type="text"
          name="search"
          maxLength="120"
          onChange={handleChangeInput}
          placeholder="What should I do?"
          className="form-input"
        />
      </header>
  );
};

export default compose(
  pure,
  withState(' search', 'handleSearch', ''),
  withHandlers({})
)(Header);
// handleChangeInput = (e) => {
//   this.setState({[e.target.name]: e.target.value});
//   const {onSearch} = this.props;
//   onSearch(e.target.value);
// };