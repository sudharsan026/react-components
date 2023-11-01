import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";
import Sidebar from "./Sidebar";
import FormatPhone from "./FormatPhone";

const App = () => {
  return (
    <div className="app">
      <FormatPhone />
    </div>
  );
};

export default App;
