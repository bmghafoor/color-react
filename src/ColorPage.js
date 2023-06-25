import React from "react";
import { useParams, Link } from "react-router-dom";

const ColorPage = ({ arrayOfColors }) => {
  console.log(arrayOfColors);
  const { colorName } = useParams();
  const color = arrayOfColors.find((color) => color.colorName === colorName);
  console.log(color);
  const colorValue = color.colorValue;

  return (
    <div style={{ backgroundColor: colorValue }}>
      <h1 style={{ color: "black" }}>This is {colorName}</h1>
      <h2>
        <Link to="/colors">Go Back</Link>
      </h2>
    </div>
  );
};

export default ColorPage;
