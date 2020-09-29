import React, { useState } from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import colorData from "./color-data.json";
import ColorList from "./components/organisms/ColorList";

export type Colors = typeof colorData;

function App() {
  const [colors, setColors] = useState<Colors>(colorData);
  return (
    <div className="App">
      {/* <MenuPage /> */}
      <ColorList
        colors={colors}
        onRemoveColor={(id: string) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id: string, rating: number) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
