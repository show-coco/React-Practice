import React from "react";
import Color from "../molecules/Color";
import { Colors } from "../../App";

type Props = {
  colors: Colors;
};

const ColorList: React.FC<Props> = ({ colors }) => {
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
