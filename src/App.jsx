import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";

const App = () => {
  const [query, setQuery] = useState("");
  console.log(Users.filter((user) => user.name.toLowerCase().includes("d")));
  return (
    <div className="app">
      <input
        className="search"
        type="text"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul className="list">
        {Users.filter((users) => users.name.toLowerCase().includes(query)).map(
          (users) => (
            <li className="list-item" key={users.id}>
              {users.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;
