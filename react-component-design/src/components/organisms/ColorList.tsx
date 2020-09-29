import React from "react";
import Color from "../molecules/Color";
import { Colors } from "../../App";

type Props = {
  colors: Colors;
  onRemoveColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
};

const ColorList: React.FC<Props> = ({ colors, onRemoveColor, onRateColor }) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={(rating) => onRateColor(color.id, rating)}
        />
      ))}
    </div>
  );
};

export default ColorList;
