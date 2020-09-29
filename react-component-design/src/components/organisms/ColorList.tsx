import React, { useContext } from "react";
import Color from "../molecules/Color";
import { ColorContext } from "../../provider/ColorProvider";

type Props = {
  onRemoveColor?: (id: string) => void;
  onRateColor?: (id: string, rating: number) => void;
};

const ColorList: React.FC<Props> = ({
  onRemoveColor = () => {},
  onRateColor = () => {},
}) => {
  const { colors } = useContext(ColorContext);
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
