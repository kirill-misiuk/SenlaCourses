import React from 'react';

import {compose, pure, withHandlers} from 'recompose';

const Nav = (props) => {

  const {handleAllButton, handleActiveButton, handleDoneButton} = props;

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

export default compose(
  pure,
  withHandlers({
    handleAllButton: ({nav}) => nav('All'),

    handleActiveButton: ({nav}) => nav('Active'),

    handleDoneButton: ({nav}) => nav('Done'),
  })
)(Nav);
