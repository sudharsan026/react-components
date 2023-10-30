import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
};

export default App;
