import { useState } from "react";

interface AddTaskProps {
  onAddTask: (task: string) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return;

    onAddTask(trimmed);
    setText("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddTask;
