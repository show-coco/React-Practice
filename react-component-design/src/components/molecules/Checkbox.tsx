import React, { FC, useState, useEffect, useReducer } from "react";

const Checkbox: FC = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <input type="checkbox" value={checked.toString()} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;
