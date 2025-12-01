function TaskItem({ task, onDelete, onToggle }) {
  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    opacity: task.completed ? 0.6 : 1,
  };

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span style={{ flexGrow: 1, ...textStyle }}>{task.text}</span>

      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
