import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.data) {
          setUsers(response.data);
          setError("");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((_user) => (
          <li key={_user.id}>{_user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
