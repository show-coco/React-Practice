import React from "react";
import { useInput } from "../hooks/useInput";

type Props = {
  onNewColor: (title: string, color: string) => void;
};

// Controlled Components
const AddColorForm: React.FC<Props> = ({ onNewColor }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
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
