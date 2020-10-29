import React, { useState } from "react";
import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import ColorList from "./components/organisms/ColorList";
import AddColorForm from "./components/organisms/AddColorForm";
import WordCount from "./components/molecules/WordCount";
import Cat from "./components/atoms/Cat";

function App() {
  const [cats, setCats] = useState(["bdidae", "aeJugnel", "outlow"]);

  return (
    <div className="App">
      {/* <MenuPage /> */}
      {/* <WordCount children="avevae veaveve" />
      <AddColorForm />
      <ColorList /> */}
      {cats.map((name, i) => (
        <Cat key={i} name={name} />
      ))}
      <button
        onClick={() => {
          setCats([...cats, prompt("Name a cat") || ""]);
        }}
      >
        Add a Cat
      </button>
    </div>
  );
}

export default App;
