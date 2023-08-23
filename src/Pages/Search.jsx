// src/components/SearchPage.jsx
import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform your search logic here and update searchResults state
    // For now, let's simulate some search results
    const results = [
      "Result 1",
      "Result 2",
      "Result 3",
      "Result 4",
      "Result 5",
    ];
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your search query..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
