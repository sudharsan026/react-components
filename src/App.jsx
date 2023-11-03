import React, { useState } from "react";
import ExpenseTable from "./expense-tracker/components/expense-table";
import ExpenseFilter from "./expense-tracker/components/expense-filter";
import ExpenseForm from "./expense-tracker/components/expense-form";
import "./App.css";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Toyota", amount: 5000, category: "transportation" },
    { id: 2, description: "Anna", amount: 7000, category: "hotel" },
    { id: 3, description: "Trivandrum", amount: 10000, category: "zoo" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(e) => setSelectedCategory(e.target.value)} />
      </div>
      <div className="mb-3">
        <ExpenseTable
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
          expenses={visibleExpenses}
        />
      </div>
    </>
  );
};

export default App;
