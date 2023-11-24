import React, { useState } from "react";

const SearchFilter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter data based on the search term
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    // Update the state with the filtered data
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
