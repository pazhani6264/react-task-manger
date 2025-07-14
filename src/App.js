import './App.css';
import React, { useState, useEffect } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import FilterButtons from "./Components/FilterButtons";
import SearchBar from "./Components/SearchBar";


const getLocalTasks = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

function App() {
  const [tasks, setTasks] = useState(getLocalTasks());
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = {
      id: newId,
      name,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "1") return task.isCompleted;
    if (filter === "2") return !task.isCompleted;
    return true;
  }).filter(task => task.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App" style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Task Manager</h2>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <SearchBar setSearch={setSearch} />
      <TaskInput addTask={addTask} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
