import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul className="list-wrapper">
      <li className="active-list-item">Property settings</li>
      <li className="default-list-item">Report</li>
      <li className="default-list-item">Dashboard</li>
      <li className="default-list-item">Questions</li>
      <li className="default-list-item">Notifications</li>
    </ul>
  );
};

export default Sidebar;
