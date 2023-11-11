import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImage = () => {
    if (!selectedFile) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("/upload-endpoint", formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then(() => {
        toast.success("Image uploaded successfully");
        // Additional logic after successful upload
      })
      .catch((error) => {
        toast.error("Error uploading image");
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={uploadImage}>Upload Image</button>

      {uploadProgress > 0 && (
        <div>
          <p>Upload Progress: {uploadProgress}%</p>
          <div
            style={{
              width: `${uploadProgress}%`,
              height: "10px",
              background: "#00b09b",
            }}
          ></div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ImageUploader;
