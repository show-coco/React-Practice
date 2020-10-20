import React from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import ColorList from "./components/organisms/ColorList";
import AddColorForm from "./components/organisms/AddColorForm";
import Checkbox from "./components/molecules/Checkbox";

function App() {
  return (
    <div className="App">
      {/* <MenuPage /> */}
      <Checkbox />
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
