import React from "react";
import StarRating from "./StarRating";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

const Color: React.FC<Props> = ({ id, title, color, rating }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating totalStars={5} selectedStars={rating} />
    </section>
  );
};

export default Color;
