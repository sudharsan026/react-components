import React, { useEffect, useState } from "react";
import TableView from "./TableView";
import axios from "axios";
const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000?query=${query.toLowerCase()}`
      );
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="search-bar" className="form-label">
        Search
      </label>
      <input
        type="text"
        placeholder="Search..."
        id="search-bar"
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />
      <TableView tableData={data} />
    </div>
  );
};

export default App;
