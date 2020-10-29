import React, { useCallback } from "react";

const Cat: React.FC<{ name: string }> = ({ name }) => {
  useCallback(() => console.log(`rendering ${name}`), [name]);

  return <p>{name}</p>;
};

const PureCat = React.memo(Cat);

export default PureCat;
