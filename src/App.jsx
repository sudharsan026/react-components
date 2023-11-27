import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./App.css"; // You can style it later

const App = () => {
  const images = [
    "https://placehold.co/400x400",
    "https://placehold.co/300x300",
    "https://placehold.co/200x200",
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
