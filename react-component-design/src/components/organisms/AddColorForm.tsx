import React from "react";
import { useInput } from "../hooks/useInput";
import { useColor } from "../../provider/ColorProvider";

// Controlled Components
const AddColorForm: React.FC = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { newColor } = useColor();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="text" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
