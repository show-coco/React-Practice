import React from "react";
import StarRating from "./StarRating";
import { ReactComponent as FaTrash } from "../../icons/FaTrash.svg";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (id: string) => void;
  onRate: (rating: number) => void;
};

// Pure Component
const Color: React.FC<Props> = ({
  id,
  title,
  color,
  rating,
  onRemove,
  onRate,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating totalStars={5} selectedStars={rating} onRate={onRate} />
    </section>
  );
};

export default Color;
