import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, text: "Learn React", completed: false },
          { id: 2, text: "Build a Todo App", completed: false },
        ]);
      }, 1000); // Simulate network delay
    });
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromApi = await fetchTasks();
      setTasks(tasksFromApi);
    };
    getTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const memoizedTodoList = useMemo(
    () => (
      <TodoList
        tasks={tasks}
        onRemove={removeTask}
        onToggle={toggleTaskCompletion}
      />
    ),
    [tasks]
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTask} />
      {memoizedTodoList}
    </div>
  );
}

export default App;
