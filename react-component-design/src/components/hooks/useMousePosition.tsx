import { useState, useLayoutEffect } from "react";

export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }: { x: number; y: number }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
};
