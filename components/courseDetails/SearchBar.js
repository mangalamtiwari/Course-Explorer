import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the search query to the parent component
        onSearch(event.target.q.value);
    };

    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="text" id="search" name="q" placeholder="Search your course name here..." />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;
