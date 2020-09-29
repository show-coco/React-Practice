import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import colors from "./color-data.json";

export type Colors = typeof colors;

export const ColorContext = createContext({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
