import React, { FC, useEffect, useMemo, useCallback } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

type Props = {
  children: string;
};

const WordCount: FC<Props> = ({ children = "" }) => {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  const fn = useCallback(() => {
    console.log("Hello");
    console.log("World");
  }, []);

  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [words, fn]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length}</strong>
      </p>
    </>
  );
};

export default WordCount;
