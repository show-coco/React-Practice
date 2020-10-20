import React, { FC, useState, useEffect } from "react";

const Checkbox: FC = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;
