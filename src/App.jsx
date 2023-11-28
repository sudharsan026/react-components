import React, { useState } from "react";
import { users } from "./MockData";
import TableView from "./TableView";
const App = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  // const searchData = (data) => {
  //   return data.filter(
  //     (_data) =>
  //       _data.first_name.toLowerCase().includes(query) ||
  //       _data.last_name.toLowerCase().includes(query) ||
  //       _data.email.toLowerCase().includes(query)
  //   );
  // };
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
      <TableView tableData={searchData(users)} />
    </div>
  );
};

export default App;
