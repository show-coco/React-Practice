import React from "react";
import Color from "../molecules/Color";
import { useColor } from "../../provider/ColorProvider";

const ColorList: React.FC = () => {
  const { colors } = useColor();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
