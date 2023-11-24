import React from "react";
import SearchFilter from "./SearchFilter";

const App = () => {
  const data = ["Hema", "Vijay", "Yonisha", "Sudharsan"];
  return (
    <div style={{ margin: "40px" }}>
      <SearchFilter data={data} />
    </div>
  );
};

export default App;
