import { useState, useEffect } from "react";
import AddTask from "./componentes/AddTask";
import TaskList from "./componentes/TaskList";
import "./App.css";

const TASKS_STORAGE_KEY = "todo-app-tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(TASKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error al leer tareas de localStorage", error);
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error al guardar tareas en localStorage", error);
    }
  }, [tasks]);

  const handleAddTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) => {
      const updated = prevTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );

      updated.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });

      return updated;
    });
  };

  const handleCompleteAll = () => {
    setTasks((prev) => prev.map((t) => ({ ...t, completed: true })));
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="app-page">
      <div className="app-container">
        <h1 className="app-title">ToDo App</h1>

        <AddTask onAddTask={handleAddTask} />

        <div className="stats">
          <span>Total: {totalTasks}</span>
          <span>Completadas: {completedTasks}</span>
          <span>Pendientes: {pendingTasks}</span>
        </div>

        <div className="filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todas
          </button>
          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completadas
          </button>
          <button
            className={`filter-btn ${filter === "pending" ? "active" : ""}`}
            onClick={() => setFilter("pending")}
          >
            Pendientes
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />

        <div className="bulk-actions-bottom">
          <button onClick={handleCompleteAll}>Completar todas</button>
          <button onClick={handleClearAll}>Eliminar todas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
