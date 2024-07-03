import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Mock API call (you can replace this with a real API call)
    const fetchTodos = async () => {
      const mockTodos = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: Date.now(),
                title: "Sample Todo",
                description: "This is a sample description",
                completed: false,
              },
            ]),
          1000
        )
      );
      setTodos(mockTodos);
    };
    fetchTodos();
  }, []);

  const addTask = (todo) => {
    setTodos([...todos, { ...todo, completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((e) => e.id !== index);
    setTodos(newTodos);
  };

  const toggleTaskCompletion = (id) => {
    console.log(id, "toggle");
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const memoizedTodoList = useMemo(
    () => (
      <TodoList
        todos={todos}
        onRemove={removeTodo}
        onToggle={toggleTaskCompletion}
      />
    ),
    [todos]
  );

  return (
    <div className="App">
      {/* <h2>Todo List</h2> */}
      <AddTodo onAdd={addTask} />
      {memoizedTodoList}
    </div>
  );
}

export default App;
