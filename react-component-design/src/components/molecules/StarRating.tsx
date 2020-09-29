import React from "react";
import Star from "../atoms/Star";

type Props = {
  totalStars: number;
  selectedStars: number;
  onRate: (rating: number) => void;
};

// Pure Component
const StarRating: React.FC<Props> = ({ totalStars, selectedStars, onRate }) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

const createArray = (length: number) => [...Array(length)];

export default StarRating;
