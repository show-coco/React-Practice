import React from "react";
import StarRating from "./StarRating";
import { ReactComponent as FaTrash } from "../../icons/FaTrash.svg";
import { useColor } from "../../provider/ColorProvider";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

// Pure Component
const Color: React.FC<Props> = ({ id, title, color, rating }) => {
  const { removeColor, rateColor } = useColor();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        totalStars={5}
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};

export default Color;
