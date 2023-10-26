import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

const App = () => {
  const [query, setQuery] = useState("");
  const searchData = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.username.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        type="text"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={searchData(Users)} />
    </div>
  );
};

export default App;
