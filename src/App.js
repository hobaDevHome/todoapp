import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaPlus } from "react-icons/fa";
import done from "./images/Done.png";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
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
    setShowAddTodo(false);
  };
  const onCancel = () => {
    setShowAddTodo(false);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((e) => e.id !== index);
    setTodos(newTodos);
  };

  const toggleTaskCompletion = (id) => {
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
      <img src={done} alt="Application icon" className="done-image" />
      {showAddTodo && <AddTodo onAdd={addTask} onCancel={onCancel} />}
      {memoizedTodoList}
      <button
        onClick={() => setShowAddTodo(!showAddTodo)}
        className="new-todo-button"
      >
        <FaPlus style={{ marginRight: 10 }} /> add new task
      </button>
    </div>
  );
}

export default App;
