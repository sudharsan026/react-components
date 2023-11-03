import React from "react";
import categories from "../categories";

const ExpenseFilter = ({ onSelect }) => {
  return (
    <select className="form-select" onChange={onSelect}>
      <option value="">All categories</option>
      {categories.map((category) => (
        <option id={category} value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
