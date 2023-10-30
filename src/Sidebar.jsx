import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const switchActiveItem = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };
  return (
    <ul className="list-wrapper">
      <li
        className={activeItem === 0 ? "active-list-item" : "default-list-item"}
        onClick={() => switchActiveItem(0)}
      >
        Property settings
      </li>
      <li
        className={activeItem === 1 ? "active-list-item" : "default-list-item"}
        onClick={() => switchActiveItem(1)}
      >
        Report
      </li>
      <li
        className={activeItem === 2 ? "active-list-item" : "default-list-item"}
        onClick={() => switchActiveItem(2)}
      >
        Dashboard
      </li>
      <li
        className={activeItem === 3 ? "active-list-item" : "default-list-item"}
        onClick={() => switchActiveItem(3)}
      >
        Questions
      </li>
      <li
        className={activeItem === 4 ? "active-list-item" : "default-list-item"}
        onClick={() => switchActiveItem(4)}
      >
        Notifications
      </li>
    </ul>
  );
};

export default Sidebar;
