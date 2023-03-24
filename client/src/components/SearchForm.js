import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form>
      <input 
        type = "text"
        value = { searchValue }
        placeholder = "search a game!" 
        onChange = { (event) => setSearchValue(event.target.value) }
      />
      <Link 
        to = {"/search?query=" + searchValue} 
      >
        <button type ="submit">Search!</button>
      </Link>
    </form>
  );
}

export default SearchForm;