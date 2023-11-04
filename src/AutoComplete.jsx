import React, { useState, useEffect } from "react";

function AutoComplete({ suggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, suggestions]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const renderSuggestions = () => {
    if (showSuggestions && inputValue) {
      if (filteredSuggestions.length === 0) {
        return <div className="suggestions">No suggestions found</div>;
      }

      return (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {renderSuggestions()}
    </div>
  );
}

export default AutoComplete;
