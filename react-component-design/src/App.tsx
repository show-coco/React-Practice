import React, { useState } from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import colorData from "./color-data.json";
import ColorList from "./components/organisms/ColorList";

export type Colors = typeof colorData;

function App() {
  const [colors] = useState<Colors>(colorData);
  return (
    <div className="App">
      {/* <MenuPage /> */}
      <ColorList colors={colors} />
    </div>
  );
}

export default App;
