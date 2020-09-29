import React, { useState } from "react";

type Returns = [
  { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
  () => void
];

// Custom Hooks
export const useInput = (initialValue: string): Returns => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};
