import React from "react";
import { useState } from "react";

const App = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   age: "",
  //   email: "",
  //   password: "",
  //   address: "",
  // });
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className="form px-5" onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          name="age"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          type="address"
          className="form-control"
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default App;
