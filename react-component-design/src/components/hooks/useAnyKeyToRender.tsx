import { useState, useEffect } from "react";

export const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    console.log("useAny");
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};
