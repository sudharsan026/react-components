import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadImage = () => {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "");

    axios
      .post("https://api.cloudinary.com/v1_1//image/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Image uploaded successfully!");
        // Handle success, e.g., show success message or update UI
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        if (error.response) {
          // The request was made, but the server responded with a status code
          // outside the range of 2xx
          if (error.response.status === 413) {
            toast.error(
              "File size is too large. Please choose a smaller file."
            );
          } else {
            toast.error("An error occurred while uploading the image.");
          }
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error("An error occurred while uploading the image.");
        }
        // Handle error, e.g., show error message or update UI
      })
      .finally(() => {
        setUploading(false);
        setUploadProgress(0);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <input
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {uploading && (
        <div style={{ marginTop: "20px" }}>
          <progress value={uploadProgress} max={100} />
          <span style={{ marginLeft: "10px" }}>{uploadProgress}%</span>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
