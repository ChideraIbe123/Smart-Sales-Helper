// src/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h3>Dashboard</h3>
        <p>Welcome to the Tik Tok Trend Analysis Tool Dashboard</p>
      </div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
