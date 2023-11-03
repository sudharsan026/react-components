import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Category</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Amount</td>
          <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
