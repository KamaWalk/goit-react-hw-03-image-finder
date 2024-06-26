import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Searchbar;