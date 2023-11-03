import React from "react";
import categories from "../categories";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input type="number" id="amount" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category">Select category</label>
        <select name="category" id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option id={category} value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
