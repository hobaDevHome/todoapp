import React, { useState } from "react";

import "./AddTodo.css";

function AddTodo({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAdd({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task title"
          className="input-field"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a brief description"
          className="input-field"
        />
        <div className="form-buttons">
          <button type="submit" className="add-button form-button">
            Add Task
          </button>
          <button className="form-button cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
