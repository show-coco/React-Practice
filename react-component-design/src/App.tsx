import React from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import ColorList from "./components/organisms/ColorList";
import AddColorForm from "./components/organisms/AddColorForm";
import WordCount from "./components/molecules/WordCount";

function App() {
  return (
    <div className="App">
      {/* <MenuPage /> */}
      <WordCount children="avevae veaveve" />
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
