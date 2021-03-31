import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div className="search">
      <form className="search__form" action="">
        <div className="search__inputGroup">
          <div className="search__icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" className="search__input" placeholder="Search Book" />
        </div>
        <button className="search__btn">Search</button>
      </form>
    </div>
  )
}

export default Search
