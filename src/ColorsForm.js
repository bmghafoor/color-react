import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ColorsForm = ({ addColor }) => {
  const IS = { colorName: "", colorValue: "#FFFFFF" };
  const [formData, setFormData] = useState(IS);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData(IS);
    addColor({ ...formData });
  };

  if (submitted) {
    return <Navigate to="/colors" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name:</label>
        <input
          type="text"
          placeholder="Color Name"
          name="colorName"
          value={formData.colorName}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="color"
          name="colorValue"
          value={formData.colorValue}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ColorsForm;
