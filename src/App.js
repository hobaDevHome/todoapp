import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaPlus } from "react-icons/fa";
import done from "./images/Done.png";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    // Function to fetch todos from   API
    const fetchTodosFromAPI = async () => {
      try {
        const mockTodos = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve([
                {
                  id: new Date().getTime(),
                  title: "Study React",
                  description: "Implementation of a React project",
                  completed: false,
                },
              ]),
            1000
          )
        );
        return mockTodos;
      } catch (error) {
        console.error("Error fetching todos from API:", error);
        return [];
      }
    };

    // Function to fetch todos from local storage
    const fetchTodosFromLocalStorage = () => {
      try {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
      } catch (error) {
        console.error("Error fetching todos from local storage:", error);
        return [];
      }
    };

    const fetchTodos = async () => {
      const apiTodos = await fetchTodosFromAPI();
      const localStorageTodos = fetchTodosFromLocalStorage();

      // combine localTodos and localStorageTodos together and remove duplicates
      const combinedTodos = [...localStorageTodos, ...apiTodos].reduce(
        (acc, current) => {
          const x = acc.find(
            (item) =>
              item.title === current.title &&
              item.description === current.description
          );
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      );

      setTodos(combinedTodos);
    };
    fetchTodos();
  }, []);

  const addTask = (todo) => {
    const newTodos = [...todos, { ...todo, completed: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setShowAddTodo(false);
  };

  const onCancel = () => {
    setShowAddTodo(false);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((e) => e.id !== index);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const toggleTaskCompletion = (id) => {
    const newTodos = todos.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
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

      {showAddTodo && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AddTodo onAdd={addTask} onCancel={onCancel} />
        </motion.div>
      )}
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
