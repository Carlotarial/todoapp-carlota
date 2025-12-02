function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
      >
        🗑
      </button>
    </li>
  );
}

export default TaskItem;
