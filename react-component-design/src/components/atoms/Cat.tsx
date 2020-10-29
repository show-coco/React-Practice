import React from "react";

const Cat: React.FC<{ name: string }> = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

export default Cat;
