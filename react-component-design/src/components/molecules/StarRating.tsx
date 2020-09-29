import React from "react";
import Star from "../atoms/Star";

type Props = {
  totalStars: number;
  selectedStars: number;
};

// Pure Component
const StarRating: React.FC<Props> = ({ totalStars, selectedStars }) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={i < selectedStars} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

const createArray = (length: number) => [...Array(length)];

export default StarRating;
