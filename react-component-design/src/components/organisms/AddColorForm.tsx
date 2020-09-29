import React, { useState } from "react";

type Props = {
  onNewColor: (title: string, color: string) => void;
};

// Controlled Components
const AddColorForm: React.FC<Props> = ({ onNewColor }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
    </form>
  );
};

export default AddColorForm;
