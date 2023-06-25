import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <h1>Welcome to the color Factory</h1>
      <Link to={"/colorsform"}>Add a Color</Link>
      <div>
        <h2>Please Select a Color</h2>
        <ul>
          {colors.map(({ colorName }) => (
            <li>
              <Link to={`${colorName}`}>{colorName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Colors };
