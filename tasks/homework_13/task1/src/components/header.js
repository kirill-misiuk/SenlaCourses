import React, {useState, useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const Header = ({onSearch}) => {
  const [search, updateSearch] = useState('');
  const handleChangeInput = useCallback((e) => {
    const result = onSearch(e.target.value);
    updateSearch(result);
  }, [onSearch, search]);
  return (
    <header id="page-header">
      <div>
        <img id="logo" src={logo} alt="logo" />
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

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default memo(Header);
