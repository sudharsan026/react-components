import React, { useMemo } from "react";
import fakeData from "./MockData.json";
import { useTable } from "react-table";
const App = () => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => [
    { Header: "ID", accessor: "id" }, // accessor is the "key" in the data
    { Header: "First name", accessor: "first_name" },
    { Header: "Last name", accessor: "last_name" },
    { Header: "Email", accessor: "email" },
    { Header: "Gender", accessor: "gender" },
    { Header: "University", accessor: "university" },
  ]); //format of arrays
  return <div>App</div>;
};

export default App;
