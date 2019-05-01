import React, {useState, useCallback, memo} from 'react';
import logo from '../images/logo.png';

const Header = ({onSearch}) => {
  const [search, updateSearch] = useState('');
  const handleChangeInput = useCallback(e => onSearch(e.target.value),[search, onSearch])
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

export default memo(Header);
// pure,
// withState(' search', 'handleSearch', ''),
// withHandlers({
//   handleChangeInput:props=> e => {
//     const {onSearch} = props;
//     onSearch(e.target.value)
//   }
// })
