import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => setProgress(progress + 10)}
        >
          Add 10%
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setProgress(progress + 20)}
        >
          Add 20%
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setProgress(100)}
        >
          Complete
        </button>
      </div>
      <br />
    </div>
  );
};

export default App;
