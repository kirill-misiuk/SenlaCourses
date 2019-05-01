import React, {useCallback, memo} from 'react';
import PropTypes from 'prop-types';

const Nav = ({nav}) => {
  const handleAllButton = useCallback(() => nav('All'), [nav]);
  const handleActiveButton = useCallback(() => nav('Active'), [nav]);
  const handleDoneButton = useCallback(() => nav('Done'), [nav]);
  return (

    <nav id="navigation">
      <hr />
      <ul>
        <li key="All">
          <button className="active" onClick={handleAllButton}>All</button>
        </li>
        <li key="Active">
          <button onClick={handleActiveButton}>Active</button>
        </li>
        <li key="Done">
          <button onClick={handleDoneButton}>Done</button>
        </li>
      </ul>
    </nav>
  );
};
Nav.propTypes = {
  nav: PropTypes.func.isRequired
};
export default memo(Nav);
