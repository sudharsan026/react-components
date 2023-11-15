import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getProducts();
    // axios
    //   .get("/products")
    //   .then((response) => setProducts(response.data.products))
    //   .catch((error) => setError(error.message));
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data.products);
      setError("");
    } catch (error) {
      setError(error.message);
      setProducts([]);
    }
  };
  return (
    <>
      {error !== "" && error}
      {products.map((_product) => (
        <div key={_product.id}>
          {_product.title} - ${_product.price}
        </div>
      ))}
    </>
  );
};

export default App;
