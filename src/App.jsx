import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

const App = () => {
  const [query, setQuery] = useState("");
  const keys = ["name", "username", "email"];
  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
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
