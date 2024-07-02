import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
