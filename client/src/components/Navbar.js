import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import './Navbar.css';

function Navbar() {
  return(
    <nav>
      <Link to = "/" className = "link">Dashboard</Link>
      <SearchForm />
    </nav>
  );
}

export default Navbar;