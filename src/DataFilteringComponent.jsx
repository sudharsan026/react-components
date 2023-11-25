import React, { useState, useEffect } from "react";

const DataFilteringComponent = ({ data }) => {
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (type, value) => {
    return data.filter((entry) => {
      if (!type || !value) {
        return (
          entry.state.toLowerCase().includes(value.toLowerCase()) ||
          entry.city.toLowerCase().includes(value.toLowerCase()) ||
          entry.place.toLowerCase().includes(value.toLowerCase())
        );
      }

      switch (type) {
        case "state":
          return entry.state.toLowerCase().includes(value.toLowerCase());
        case "city":
          return entry.city.toLowerCase().includes(value.toLowerCase());
        case "place":
          return entry.place.toLowerCase().includes(value.toLowerCase());
        default:
          return true;
      }
    });
  };

  useEffect(() => {
    const newFilteredData = filterData(searchType, searchValue);
    setFilteredData(newFilteredData);
  }, [searchType, searchValue]);

  return (
    <div>
      <label htmlFor="searchType">Search by:</label>
      <select
        id="searchType"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="state">State</option>
        <option value="city">City</option>
        <option value="place">Place</option>
      </select>

      <label htmlFor="searchValue">Search Value:</label>
      <input
        type="text"
        id="searchValue"
        placeholder="Enter search criteria"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <ul>
        {filteredData?.map((entry) => (
          <li key={`${entry.first_name}-${entry.last_name}`}>
            {`${entry.first_name} ${entry.last_name} - ${entry.email}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilteringComponent;
