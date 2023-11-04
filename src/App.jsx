import React from "react";
import AutoComplete from "./AutoComplete.jsx";

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grapes",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pineapple",
];

function App() {
  return (
    <div className="App">
      <h1>Autocomplete</h1>
      <AutoComplete suggestions={suggestions} />
    </div>
  );
}

export default App;
