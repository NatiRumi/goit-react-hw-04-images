import React from 'react';
import css from './BtnStyle.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={css.loadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
