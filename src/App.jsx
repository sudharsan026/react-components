import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <Card cardTitle={user.name} cardDes={user.email} />
      ))}
    </ul>
  );
};

export default App;
