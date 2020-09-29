import React from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import ColorList from "./components/organisms/ColorList";
import AddColorForm from "./components/organisms/AddColorForm";

function App() {
  return (
    <div className="App">
      {/* <MenuPage /> */}
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;

// onRemoveColor={(id: string) => {
//   const newColors = colors.filter((color) => color.id !== id);
//   setColors(newColors);
// }}

// onRateColor={(id: string, rating: number) => {
//   const newColors = colors.map((color) =>
//     color.id === id ? { ...color, rating } : color
//   );
//   setColors(newColors);
// }}

// onNewColor={(title, color) => {
//   setColors([
//     ...colors,
//     { id: getUniqueStr(), rating: 0, color, title },
//   ]);
// }}
