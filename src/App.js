import "./App.css";
import React, { useState } from "react";
import { Colors } from "./Colors";
import ColorsForm from "./ColorsForm";
import ColorPage from "./ColorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [colors, setColors] = useState([]);
  const addColor = (newColor) => {
    setColors((colors) => [...colors, { ...newColor }]);
  };
  App.defaultProps = {
    colors: [{ colorName: "white", colorValue: "#FFFFFF" }],
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/colors"
          element={<Colors colors={colors} />}
        ></Route>
        <Route
          exact
          path="/colorsform"
          element={<ColorsForm addColor={addColor} />}
        ></Route>
        <Route
          exact
          path="/colors/:colorName"
          element={<ColorPage arrayOfColors={colors} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
