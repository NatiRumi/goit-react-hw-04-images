import React from 'react';
import css from './formStyle.module.css';

const FormSearch = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default FormSearch;
