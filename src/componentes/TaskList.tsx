import TaskItem from "./TaskItem";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

function TaskList({ tasks, onDeleteTask, onToggleTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty">No hay tareas aún.</p>;
  }

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <ul className="task-list">
      {pendingTasks.length > 0 && (
        <li className="task-separator">
          <span>Tareas pendientes</span>
        </li>
      )}

      {pendingTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}

      {completedTasks.length > 0 && (
        <li className="task-separator">
          <span>Tareas completadas</span>
        </li>
      )}

      {completedTasks.map((task) => (
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
