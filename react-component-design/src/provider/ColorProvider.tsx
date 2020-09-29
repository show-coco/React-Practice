import React, { createContext, useState, useContext } from "react";
import colorDate from "../color-data.json";
import { getUniqueStr } from "../utils/uuid";

type ColorDate = typeof colorDate;

type Context = {
  colors: ColorDate;
  setColors: React.Dispatch<ColorDate>;
  removeColor: (id: string) => void;
  rateColor: (id: string, rating: number) => void;
  newColor: (title: string, color: string) => void;
};

export const ColorContext = createContext<Context>({
  colors: colorDate,
  setColors: () => {},
  removeColor: () => {},
  rateColor: () => {},
  newColor: () => {},
});

export const useColor = () => useContext(ColorContext);

const ColorProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useState<ColorDate>(colorDate);

  const removeColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const newColor = (title: string, color: string) => {
    setColors([...colors, { id: getUniqueStr(), rating: 0, color, title }]);
  };

  return (
    <ColorContext.Provider
      value={{ colors, setColors, removeColor, rateColor, newColor }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
