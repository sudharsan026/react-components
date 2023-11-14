import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./App.css";
import Pagination from "./Pagination";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setCoinsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const lastPostIndex = currentPage * postsPerPage; // 1 * 4 = 4
  const firstPostIndex = lastPostIndex - postsPerPage; // 4 - 4 = 0
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="app">
      <Card cardData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
