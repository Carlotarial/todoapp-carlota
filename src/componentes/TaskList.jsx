import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (tasks.length === 0) {
    return <p>No hay tareas aún.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
