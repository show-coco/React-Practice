import React, { createContext, useState } from "react";
import colorDate from "../color-data.json";

type ColorDate = typeof colorDate;

type Context = {
  colors: ColorDate;
  setColors: React.Dispatch<ColorDate>;
};

export const ColorContext = createContext<Context>({
  colors: colorDate,
  setColors: () => {},
});

const ColorProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useState<ColorDate>(colorDate);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
