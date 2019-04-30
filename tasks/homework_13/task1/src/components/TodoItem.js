import React from 'react';
import {compose, withState, withHandlers} from 'recompose';
import './styles.css';
import logo from '../images/Delete.png';

const TodoItem = (props) => {
  const {
    inside, todo, done, favorite, handleDeleteButton, handleFavoriteButton, handleDoneButton, handleHoverEnter, handleOutEnter
  } = props;
  // state = {
  //   inside: false,
  // };
  let text = 'Not Important';
  if (!favorite) text = 'Mark Important';
  return (
    <div className="todo-item" onMouseEnter={handleHoverEnter} onMouseLeave={handleOutEnter}>
      <li
        className="todo-text"
        onClick={handleDoneButton}
        style={{
          fontWeight: favorite ? 'bolder' : 'normal',
          fontFamily: favorite ? 'Verdana' : 'Arial',
          textDecoration: done ? 'line-through' : 'none',
        }}
      >
        {favorite && <i className="far fa-star" />}
        {todo}
      </li>

      {inside && (
      <button
        type="button"
        className="favorite-button"
        onClick={handleFavoriteButton}
        style={{
          background: favorite ? 'rgba(116, 118, 122, 0.22)' : 'rgba(11, 255, 15, 0.87)'
        }}
      >
        {text}
      </button>
      )}

      {inside
          && (
          <img
            type="button"
            id="logo"
            src={logo}
            alt="logo"
            className="delete-button"
            onClick={handleDeleteButton}
          />
          )}
    </div>
  );
};

export default compose(
  withState('inside', 'insideHandler', false),
  withHandlers({
    handleDeleteButton: ({toggleDeleteButton,id})  => toggleDeleteButton(id),
    handleFavoriteButton: ({toggleFavoriteButton,id})  => toggleFavoriteButton(id),
    handleDoneButton: ({toggleDoneButton,id})  => toggleDoneButton(id),
    handleOutEnter: ({insideHandler}) => insideHandler(false),
    handleHoverEnter: ({insideHandler}) => insideHandler(true)
  })
)(TodoItem);
