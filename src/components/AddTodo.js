import React, { useState } from "react";
import done from "../images/Done.png";
import "./AddTodo.css";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
        <img src={done} alt="Done" className="done-image" />
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
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
