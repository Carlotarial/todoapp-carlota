import { useState } from "react";
import AddTask from "./componentes/AddTask";
import TaskList from "./componentes/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>ToDo App</h1>

      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
}

export default App;
