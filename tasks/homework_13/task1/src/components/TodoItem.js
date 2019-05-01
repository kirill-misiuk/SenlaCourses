import React, {useState, useCallback, memo} from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import logo from '../images/Delete.png';

const TodoItem = ({
  todo, favorite, done, id, toggleDeleteButton, toggleFavoriteButton, toggleDoneButton
}) => {
  const [inside, insideHandler] = useState(false);
  const handleDeleteButton = useCallback(() => toggleDeleteButton(id), [toggleDeleteButton, id]);
  const handleFavoriteButton = useCallback(() => toggleFavoriteButton(id),
    [toggleDeleteButton, id]);
  const handleDoneButton = useCallback(() => toggleDoneButton(id), [toggleDoneButton, id]);
  const handleOutEnter = useCallback(() => insideHandler(false), [insideHandler, inside]);
  const handleHoverEnter = useCallback(() => insideHandler(true),[insideHandler, inside]);
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
TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  toggleDeleteButton: PropTypes.func.isRequired,
  toggleFavoriteButton: PropTypes.func.isRequired,
  toggleDoneButton: PropTypes.func.isRequired,
};

export default memo(TodoItem);
