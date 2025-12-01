import { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return;

    onAddTask(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "70%", marginRight: "0.5rem" }}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddTask;
